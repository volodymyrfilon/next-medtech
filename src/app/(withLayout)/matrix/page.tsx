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
    comfort = checkIsValid22(portraitPrimary + inspirationPrimary + materialPrimary + karmaPrimary);
    fathersLinePrimary = checkIsValid22(portraitPrimary + inspirationPrimary);
    fathersLineSoulsTaskPrimary = checkIsValid22(materialPrimary + karmaPrimary);
    mothersLinePrimary = checkIsValid22(inspirationPrimary + materialPrimary);
    mothersLineSoulsTaskPrimary = checkIsValid22(portraitPrimary + karmaPrimary);

    karmaTetriary = checkIsValid22(comfort + karmaPrimary);
    karmaSecondary = checkIsValid22(karmaTetriary + karmaPrimary);
    inspirationTetriary = checkIsValid22(comfort + inspirationPrimary);
    inspirationSecondary = checkIsValid22(inspirationTetriary + inspirationPrimary);
    materialTetriary = checkIsValid22(comfort + materialPrimary);
    materialSecondary = checkIsValid22(materialTetriary + materialPrimary);
    portraitTetriary = checkIsValid22(comfort + portraitPrimary);
    portraitSecondary = checkIsValid22(portraitTetriary + portraitPrimary);
    fathersLineTetriary = checkIsValid22(comfort + fathersLinePrimary);
    fathersLineSecondary = checkIsValid22(fathersLineTetriary + fathersLinePrimary);
    fathersLineSoulsTaskTetriary = checkIsValid22(comfort + fathersLineSoulsTaskPrimary);
    fathersLineSoulsTaskSecondary = checkIsValid22(
      fathersLineSoulsTaskTetriary + fathersLineSoulsTaskPrimary
    );
    mothersLineTetriary = checkIsValid22(comfort + mothersLinePrimary);
    mothersLineSecondary = checkIsValid22(mothersLineTetriary + mothersLinePrimary);
    mothersLineSoulsTaskTetriary = checkIsValid22(comfort + mothersLineSoulsTaskPrimary);
    mothersLineSoulsTaskSecondary = checkIsValid22(
      mothersLineSoulsTaskTetriary + mothersLineSoulsTaskPrimary
    );

    centerOfPartners = checkIsValid22(karmaTetriary + materialTetriary);
    centerOfMaterials = checkIsValid22(centerOfPartners + materialTetriary);
    centerOfRelations = checkIsValid22(centerOfPartners + karmaTetriary);
    chakraAnahataOfPortrait = checkIsValid22(comfort + portraitTetriary);
    chakraAnahataOfInspiration = checkIsValid22(comfort + inspirationTetriary);

    setZoneOfComfort(comfort);
    setZoneOfPortrait([portraitPrimary, portraitSecondary, portraitTetriary]);
    setZoneOfInspiration([inspirationPrimary, inspirationSecondary, inspirationTetriary]);
    setZoneOfMaterial([materialPrimary, materialSecondary, materialTetriary]);
    setZoneOfKarma([karmaPrimary, karmaSecondary, karmaTetriary]);
    setZoneOfFathersLine([fathersLinePrimary, fathersLineSecondary, fathersLineTetriary]);
    setZoneOfFathersLineSoulsTask([
      fathersLineSoulsTaskPrimary,
      fathersLineSoulsTaskSecondary,
      fathersLineSoulsTaskTetriary,
    ]);
    setZoneOfMothersLine([mothersLinePrimary, mothersLineSecondary, mothersLineTetriary]);
    setZoneOfMothersLineSoulsTask([
      mothersLineSoulsTaskPrimary,
      mothersLineSoulsTaskSecondary,
      mothersLineSoulsTaskTetriary,
    ]);

    setCenterOfPartners(centerOfPartners);
    setCenterOfMaterials(centerOfMaterials);
    setCenterOfRelations(centerOfRelations);
    setChakraAnahataOfPortrait(chakraAnahataOfPortrait);
    setChakraAnahataOfInspiration(chakraAnahataOfInspiration);
  }
  console.log('zoneOfComfort:', zoneOfComfort);
  console.log('chakraAnahataOfPortrait:', chakraAnahataOfPortrait);
  console.log('chakraAnahataOfInspiration:', chakraAnahataOfInspiration);
  console.log('centerOfMaterials:', centerOfMaterials);
  console.log('centerOfRelations:', centerOfRelations);
  console.log('centerOfPartners:', centerOfPartners);
  console.log('zoneOfPortrait:', zoneOfPortrait);
  console.log('zoneOfInspiration:', zoneOfInspiration);
  console.log('zoneOfMaterial:', zoneOfMaterial);
  console.log('zoneOfKarma:', zoneOfKarma);
  console.log('zoneOfFathersLine:', zoneOfFathersLine);
  console.log('zoneOfFathersLineSoulsTask:', zoneOfFathersLineSoulsTask);
  console.log('zoneOfMothersLine:', zoneOfMothersLine);
  console.log('zoneOfMothersLineSoulsTask:', zoneOfMothersLineSoulsTask);

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
      </div>
    </>
  );
};

export default page;
