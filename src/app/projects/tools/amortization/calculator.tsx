'use client'

import { Button } from "@/components/catalyst/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/catalyst/table";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface CalculatorErrors {
  [name: string]: boolean,
}

interface AmortizationEntry {
  payment_number: number,
  payment: number,
  interest: number,
  principal: number,
  remainingBalance: number
}

interface Amortization {
  payment: number,
  total_interest: number,
  schedule: AmortizationEntry[]
}

export default function Calculator() {
  const [error, setError] = useState<CalculatorErrors>({ principal: false, apr: false, term: false })
  const [principal, setPrincipal] = useState('')
  const [apr, setApr] = useState('')
  const [term, setTerm] = useState('')
  const [extraMonthly, setExtraMonthly] = useState('')
  const [extraYearly, setExtraYearly] = useState('')
  const [amortization, setAmortization] = useState<Amortization|undefined>(undefined)

  function hasError() {
    for (const value of Object.keys(error)) {
      if (error[value]) {
        return true
      }
    }

    return false
  }

  function isOk() {
    return !hasError() && principal !== '' && apr !== '' && term != ''
  }

  function handleInputUpdate(e: ChangeEvent<HTMLInputElement>, errorKey: string, updater: Dispatch<SetStateAction<string>>, validator: (value: string) => boolean) {
    const { value } = e.target

    updater(value)

    if (value === '') {
      setError(prev => {
        prev[errorKey] = false
        return prev
      })
    } else if (!validator(value)) {
      setError(prev => {
        prev[errorKey] = true
        return prev
      })
    }
  }

  function handlePrincipalUpdate(e: ChangeEvent<HTMLInputElement>) {
    handleInputUpdate(e, 'principal', setPrincipal, value => !Number.isNaN(parseFloat(value)))
  }

  function handleAprUpdate(e: ChangeEvent<HTMLInputElement>) {
    handleInputUpdate(e, 'apr', setApr, value => !Number.isNaN(parseFloat(value)))
  }

  function handleTermUpdate(e: ChangeEvent<HTMLInputElement>) {
    handleInputUpdate(e, 'term', setTerm, value => !Number.isNaN(parseInt(value)))
  }

  function computeAmortization() {
    const principalNum = parseFloat(principal)
    const aprNum = parseFloat(apr)
    const termNum = parseInt(term)

    const monthlyInterestRate = aprNum / 12
    const monthlyPayment = principalNum * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termNum)) / (Math.pow(1 + monthlyInterestRate, termNum) - 1))

    const paymentSchedule: AmortizationEntry[] = []

    let totalInterestPaid = 0
    let remainingBalance = principalNum
    for (let i = 1; i <= termNum; i++) {
      const periodInterest = remainingBalance * monthlyInterestRate
      totalInterestPaid += periodInterest

      let periodPrincipal = monthlyPayment - periodInterest

      let thisPayment = monthlyPayment
      if (i == termNum) {
        periodPrincipal = remainingBalance
        thisPayment = periodPrincipal + periodInterest
      }

      remainingBalance -= periodPrincipal

      paymentSchedule.push({
        payment_number: i,
        payment: thisPayment,
        interest: periodInterest,
        principal: periodPrincipal,
        remainingBalance: remainingBalance
      })
    }

    setAmortization({ payment: monthlyPayment, total_interest: totalInterestPaid, schedule: paymentSchedule })
  }

  const errorElem = Object.entries(error).filter(err => err[1]).map(err => {
    switch (err[0]) {
      case 'principal':
        return 'Principal must be a valid monetary amount.'
      case 'apr':
        return 'APR must be a decimal value representing the annual percentage rate of the loan.'
      case 'term':
        return 'Term must be a number (the number of months until loan maturity).'
    }
  })

  const amortizationElem = amortization ?
    <div className="w-full">
      <p><strong>Monthly Payment:</strong> {amortization.payment.toFixed(2)}</p>
      <p><strong>Total Interest:</strong> {amortization.total_interest.toFixed(2)}</p>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Payment Number</TableHeader>
            <TableHeader>Interest Portion</TableHeader>
            <TableHeader>Principal Portion</TableHeader>
            <TableHeader>Remaining Balance</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {amortization.schedule.map(entry => (
            <TableRow key={`payment-${entry.payment_number}`}>
              <TableCell>{entry.payment_number}</TableCell>
              <TableCell>{entry.interest.toFixed(2)}</TableCell>
              <TableCell>{entry.principal.toFixed(2)}</TableCell>
              <TableCell>{entry.remainingBalance.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div> : <div><p>Fill out the form to see the amortization details.</p></div>

  return <div className="flex gap-x-12 justify-center">
    <div className="w-full">
      <h1 className="text-lg font-bold">Loan Details</h1>
      <ul className="text-red-400 font-bold">
        {errorElem.map((err, idx) => <li key={`err${idx}`}>{err}</li>)}
      </ul>
      <div className="flex flex-col gap-y-6">
        <FieldGroup>
          <Field>
            <Label>Principal Amount</Label>
            <Input value={principal} onChange={handlePrincipalUpdate} invalid={error['principal']} required />
          </Field>
          <Field>
            <Label>Annual Interest Rate (APR)</Label>
            <Input value={apr} onChange={handleAprUpdate} invalid={error['apr']} required />
          </Field>
          <Field>
            <Label>Length of Loan (Months)</Label>
            <Input value={term} onChange={handleTermUpdate} invalid={error['term']} required />
          </Field>
        </FieldGroup>
        <Button onClick={computeAmortization} disabled={!isOk()}>
          Compute
        </Button>
      </div>
    </div>
    <div className="w-full">
      <h1 className="text-lg font-bold">Amortization Schedule</h1>
      {amortizationElem}
    </div>
  </div>
}