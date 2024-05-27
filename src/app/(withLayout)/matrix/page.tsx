'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useState } from 'react';

const page = () => {
  const initialArrayState = [0, 0, 0];
  const [dateOfBirth, setDateOfBirth] = useState<string>('16/09/2002');

  const [zoneOfComfort, setZoneOfComfort] = useState<number>(0);
  const [chakraAnahataOfPortrait, setChakraAnahataOfPortrait] = useState<number>(0);
  const [chakraAnahataOfInspiration, setChakraAnahataOfInspiration] = useState<number>(0);
  const [centerOfMaterials, setCenterOfMaterials] = useState<number>(0);
  const [centerOfRelations, setCenterOfRelations] = useState<number>(0);
  const [centerOfPartners, setCenterOfPartners] = useState<number>(0);

  const [zoneOfPortrait, setZoneOfPortrait] = useState<number[]>(initialArrayState);
  const [zoneOfInspiration, setZoneOfInspiration] = useState<number[]>(initialArrayState);
  const [zoneOfMaterial, setZoneOfMaterial] = useState<number[]>(initialArrayState);
  const [zoneOfKarma, setZoneOfKarma] = useState<number[]>(initialArrayState);
  const [zoneOfFathersLine, setZoneOfFathersLine] = useState<number[]>(initialArrayState);
  const [zoneOfFathersLineSoulsTask, setZoneOfFathersLineSoulsTask] =
    useState<number[]>(initialArrayState);
  const [zoneOfMothersLine, setZoneOfMothersLine] = useState<number[]>(initialArrayState);
  const [zoneOfMothersLineSoulsTask, setZoneOfMothersLineSoulsTask] =
    useState<number[]>(initialArrayState);

  function calculateMatrix(dateOfBirth: string): number[] | void {
    if (!dateOfBirth) return;

    const [dayStr, monthStr, yearStr] = dateOfBirth.split('/');
    let day = Number(dayStr);
    let month = Number(monthStr);
    let year = Number(yearStr);

    const sumDigits = (date: string): number => {
      return date.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    const checkIsValid22 = (date: number): number => {
      if (date <= 22) {
        return date;
      } else {
        const sum = sumDigits(String(date));
        return sum;
      }
    };

    let comfort,
      chakraAnahataOfPortrait,
      chakraAnahataOfInspiration,
      centerOfMaterials,
      centerOfRelations,
      centerOfPartners,
      portraitPrimary,
      portraitSecondary,
      portraitTetriary,
      inspirationPrimary,
      inspirationSecondary,
      inspirationTetriary,
      materialPrimary,
      materialSecondary,
      materialTetriary,
      karmaPrimary,
      karmaSecondary,
      karmaTetriary,
      fathersLinePrimary,
      fathersLineSecondary,
      fathersLineTetriary,
      fathersLineSoulsTaskPrimary,
      fathersLineSoulsTaskSecondary,
      fathersLineSoulsTaskTetriary,
      mothersLinePrimary,
      mothersLineSecondary,
      mothersLineTetriary,
      mothersLineSoulsTaskPrimary,
      mothersLineSoulsTaskSecondary,
      mothersLineSoulsTaskTetriary;

    portraitPrimary = checkIsValid22(day);
    inspirationPrimary = checkIsValid22(month);
    materialPrimary = checkIsValid22(year);
    karmaPrimary = checkIsValid22(portraitPrimary + inspirationPrimary + materialPrimary);
    comfort = checkIsValid22(karmaPrimary + portraitPrimary + inspirationPrimary + materialPrimary);

    console.log(portraitPrimary);
    console.log(inspirationPrimary);
    console.log(materialPrimary);
    console.log(karmaPrimary);
    console.log(comfort);

    setZoneOfComfort(portraitPrimary);
    setZoneOfPortrait([portraitPrimary, 0, 0]);
    setZoneOfInspiration([inspirationPrimary, 0, 0]);
    setZoneOfMaterial([materialPrimary, 0, 0]);
    setZoneOfKarma([karmaPrimary, 0, 0]);
  }

  return (
    <>
      Date of Birth
      <Input
        type="text"
        value="16/09/2002"
        className="border-2 bg-accent-gray"
        onChange={e => setDateOfBirth(e.target.value)}
      />
      <Button onClick={() => calculateMatrix(dateOfBirth)}>Submit</Button>
      <div className="relative mx-auto h-[900px] w-[930px]">
        <Image src="/images/matrix/matrix.png" fill alt="" className="w-full" />

        {/* zone of comfort */}
        <div className="absolute left-1/2 top-[49.8%] flex h-20 w-20 -translate-x-7 -translate-y-7 items-center justify-center rounded-full bg-yellow-400 text-center text-4xl text-black ">
          {zoneOfComfort ?? 0}
        </div>

        <span className="absolute left-9 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-purple-500 text-center text-xl text-black">
          {zoneOfPortrait[0] ?? 0}
        </span>
        <span className="absolute left-1/2 top-7 flex h-9 w-9 -translate-x-1/2  items-center justify-center rounded-full bg-purple-500 text-center text-xl text-black">
          {zoneOfInspiration[0] ?? 0}
        </span>
        <span className="absolute right-9 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-center text-xl text-black">
          {zoneOfMaterial[0] ?? 0}
        </span>
        <span className="absolute left-1/2 top-[100%] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-center text-xl text-black">
          {zoneOfKarma[0] ?? 0}
        </span>
      </div>
    </>
  );
};

export default page;
