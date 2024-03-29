"use client";
import ComponentViewer from "@/components/ComponentViewer";
import Input from "@/components/Rumi/Input";
import Inputd from "@/components/Rumi/Inputd";
import InputContent from "@/components/Rumi/InputContent";
import { MagnifyingGlassIcon, NoSymbolIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      <h2 className="text-xl mt-12">Variants</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Input type="text" />
          <Inputd type="text" placeholder="jjjjj" className="color-red-500" />
          <Input type="text" placeholder="placeholder" />
          <Input type="text" value="normal value" />
          <InputContent type="text" placeholder="prefix">
            EC
          </InputContent>
          <InputContent type="text" placeholder="suffix" suffix>
            .COM
          </InputContent>
          <InputContent type="text" placeholder="icon">
            <MagnifyingGlassIcon className="icon" />
          </InputContent>
          <InputContent type="text" placeholder="icon" suffix>
            <MagnifyingGlassIcon className="icon" />
          </InputContent>
          <Input type="text" value="disabled value" disabled />
          <InputContent type="text" placeholder="disabled placeholder" disabled>
            <NoSymbolIcon className="icon" />
          </InputContent>
        </div>
      </ComponentViewer>
      <h2 className="text-xl mt-12">Sizes</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <Input type="text" placeholder="xs" className="scale-xs" />
          <Input type="text" placeholder="sm" className="scale-sm" />
          <Input type="text" placeholder="md" className="scale-md" />
          <Input type="text" placeholder="lg" className="scale-lg" />
          <Input type="text" placeholder="xl" className="scale-xl" />
        </div>
      </ComponentViewer>
      <h2 className="text-xl mt-12">Types</h2>
      <ComponentViewer>
        <div className="flex flex-col items-start gap-4">
          <h3>Date & time</h3>
          <Input type="datetime-local" />
          <Input type="date" />
          <Input type="time" placeholder="time" />
          <Input type="month" placeholder="month" />
          <Input type="week" placeholder="week" />

          <h3 className="mt-8">Numbers</h3>
          <Input type="number" placeholder="number" />
          <Input type="tel" placeholder="tel" />

          <h3 className="mt-8">Texts</h3>
          <Input type="email" placeholder="email" />
          <Input type="url" placeholder="url" />
          <Input type="search" placeholder="search" />
          <Input type="password" placeholder="password" />

          {/* BUTTONS
          <Input type="reset" placeholder="reset" />
          <Input type="button" placeholder="button" />
          <Input type="image" placeholder="image" />
        <Input type="submit" placeholder="submit" /> */}

          {/* <Input type="color" placeholder="color" />*/}
          {/* <Input type="file" placeholder="file" /> */}
        </div>
      </ComponentViewer>
    </>
  );
}
