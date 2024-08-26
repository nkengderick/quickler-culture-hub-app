"use client"
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { auth, db } from '@/lib/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

// Step validation schemas
const step1Schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const step2Schema = z.object({
  name: z.string().min(1, 'Name is required'),
  profilePic: z.instanceof(File).optional(),
});

const step3Schema = z.object({
  purpose: z.string().min(1, 'Please select a purpose'),
  interests: z.string().min(1, 'Please select at least one interest'),
});

type FormValues = {
  email: string;
  password: string;
  name: string;
  profilePic: File | null;
  purpose: string;
  interests: string;
};

const SignupForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit, control, setValue, getValues, formState: { errors, isValid } } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(step === 1 ? step1Schema : step === 2 ? step2Schema : step3Schema),
  });

  const handleNext = async (data: FormValues) => {
    if (step === 1) {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        setStep(2);
      } catch (error) {
        console.error('Error creating user:', error);
      }
    } else if (step === 2) {
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, {
          displayName: data.name,
          photoURL: data.profilePic ? URL.createObjectURL(data.profilePic) : '',
        });
        await setDoc(doc(db, 'users', user.uid), {
          name: data.name,
          profilePic: data.profilePic ? URL.createObjectURL(data.profilePic) : '',
        });
        setStep(3);
      }
    } else if (step === 3) {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          purposes: data.purpose,
          interests: data.interests,
        });
        // Redirect to profile page
        window.location.href = '/profile';
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSubmit(handleNext)} className="w-full max-w-md">
        {step === 1 && (
          <>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <input {...field} type="email" placeholder="Email" className="input-field" />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <input {...field} type="password" placeholder="Password" className="input-field" />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
              )}
            />
          </>
        )}

        {step === 2 && (
          <>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <input {...field} type="text" placeholder="Name" className="input-field" />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
              )}
            />
            <Controller
              name="profilePic"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <input 
                    type="file" 
                    onChange={(e) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      setValue('profilePic', file);
                    }} 
                    className="input-field"
                  />
                  {errors.profilePic && <p className="text-red-500">{errors.profilePic.message}</p>}
                </div>
              )}
            />
          </>
        )}

        {step === 3 && (
          <>
            <Controller
              name="purpose"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <select {...field} className="input-field">
                    <option value="" disabled>Select Your Purpose</option>
                    <option value="Sell Art">Sell Art</option>
                    <option value="Showcase Portfolio">Showcase Portfolio</option>
                    <option value="Collaborate">Collaborate</option>
                  </select>
                  {errors.purpose && <p className="text-red-500">{errors.purpose.message}</p>}
                </div>
              )}
            />
            <Controller
              name="interests"
              control={control}
              render={({ field }) => (
                <div className="mb-4">
                  <input {...field} type="text" placeholder="Interests" className="input-field" />
                  {errors.interests && <p className="text-red-500">{errors.interests.message}</p>}
                </div>
              )}
            />
          </>
        )}

        <button type="submit" className="btn-primary mt-4" disabled={!isValid}>
          {step === 3 ? 'Complete Signup' : 'Next'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
