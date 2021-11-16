import { z } from 'zod'
import { Card } from '../ui/Card'
import Form, { useZodForm } from '../ui/Form/Form'
import FormSubmitButton from '../ui/Form/SubmitButton'
import { Input } from '../ui/Input'
import { Link } from '../ui/Link'
import { AuthLayout } from './AuthLayout'

const SignUpSchema = z.object({
	email: z.string().email(),
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	username: z.string().min(3),
	password: z.string().min(5),
})

export function SignUp() {
	const form = useZodForm({
		schema: SignUpSchema,
	})

	return (
		<AuthLayout title="Sign Up." subtitle="Sign up and join DogeMart!">
			<Form form={form} onSubmit={() => console.log('stuff')}>
				<Input
					label="Email Address"
					type="email"
					placeholder="you@example.com"
					{...form.register('email')}
				/>

				<Input
					label="First Name"
					type="text"
					placeholder="John"
					{...form.register('firstName')}
				/>

				<Input
					label="Last Name"
					type="text"
					placeholder="Doe"
					{...form.register('lastName')}
				/>

				<Input
					label="Username"
					type="text"
					placeholder="Your Username"
					{...form.register('username')}
				/>

				<Input
					label="Password"
					type="password"
					placeholder="Your password (min 5)"
					{...form.register('password')}
				/>

				<FormSubmitButton size="lg">Sign Up</FormSubmitButton>
			</Form>
			<div>
				<Card rounded="lg" className="mt-4">
					<Card.Body>
						<span className="mr-1">Already have an account ?</span>
						<Link
							className="font-medium text-brand-600 hover:text-brand-400"
							href="/auth/login"
						>
							Log into DogeMart
						</Link>
					</Card.Body>
				</Card>
			</div>
		</AuthLayout>
	)
}
