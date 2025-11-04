import { type Metadata } from 'next'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <AuthLayout
      title="Sign up for an account"
      subtitle={
        <>
          Already registered?{' '}
          <Link href="/login" className="text-yellow-600">
            Sign in
          </Link>{' '}
          to your account.
        </>
      }
    >
      <form>
        <div className="grid grid-cols-2 gap-6">
          <TextField
            label="First name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            name="referral_source"
          >
            <option>Search engine (Google, Bing, etc.)</option>
            <option>Social media (Facebook, Instagram, etc.)</option>
            <option>Friend or colleague referral</option>
            <option>Blog or article</option>
            <option>Other</option>
          </SelectField>
        </div>
        <Button type="submit" color="cyan" className="mt-8 w-full">
          Get started today
        </Button>
      </form>
    </AuthLayout>
  )
}
