import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Field, FieldGroup, Fieldset, Label, Legend } from '@/components/catalyst/fieldset'
import { Input } from '@headlessui/react'
import { Card } from '@/components/Card'
import { Button } from '@/components/catalyst/button'

export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Amortization Calculator',
  description: 'An amortization calculator. Use this to calculate your expected monthly payment, view an amortization calendar, and see how applying extra monthly payments can affect your payoff time.',
}

async function buildAmortization(data: FormData) {
  'use server';

  console.log(data)
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Amortization Calculator"
      intro="An amortization calculator. Use this to calculate your expected monthly payment, view an amortization calendar, and see how applying extra monthly payments can affect your payoff time."
    >
      <Card>
        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          Loan Information
        </h2>
        <form action={buildAmortization}>
          <Fieldset>
            <FieldGroup>
              <Field className="flex flex-col gap-y-2">
                <Label>Principal Amount</Label>
                <Input type="number" invalid={true} name="principal_amount" />
              </Field>
              <Field className="flex flex-col gap-y-2">
                <Label>Annual Interest Rate (APR)</Label>
                <Input type="number" name="apr" />
              </Field>
              <Field className="flex flex-col gap-y-2">
                <Label>Length of Loan (Months)</Label>
                <Input type="number" name="payment_term" />
              </Field>
            </FieldGroup>
            <FieldGroup>
              <Field className="flex flex-col gap-y-2">
                <Label>Extra Monthly Payment</Label>
                <Input type="number" name="extra_monthly_payment" />
              </Field>
              <Field className="flex flex-col gap-y-2">
                <Label>Extra Yearly Payment</Label>
                <Input type="number" name="extra_yearly_payment" />
              </Field>
            </FieldGroup>
            <Button type="submit">Submit</Button>
          </Fieldset>
        </form>
      </Card>
    </SimpleLayout>
  )
}
