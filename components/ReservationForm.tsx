"use client"
import { Input } from '@nextui-org/input'
import { DatePicker } from '@nextui-org/date-picker'
import { now, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { Button } from '@nextui-org/button';
import { useLocale } from '@react-aria/i18n';

export default function ReservationForm() {
  let { locale } = useLocale()
  return (
    <form action={async (data) => {
      // TODO
      console.log(data)
    }}
      className='flex flex-col gap-4'>
      <Input name='email' label="Email" />
      <div className='flex gap-4'>
        <Input name='first-name' label="First Name" />
        <Input name='last-name' label="Last Name" />
      </div>
      <div className='flex gap-4'>
        <DatePicker
          label='Pick a date and time'
          showMonthAndYearPickers
          defaultValue={now(getLocalTimeZone())}
          minValue={now(getLocalTimeZone())}
          isDateUnavailable={(date) => { return isWeekend(date, locale) }}
          name='date'
        />
        <Input name='phone' label="Phone" />
      </div>
      <Button type='submit'>Reserve Now</Button>
    </form>
  )
}

