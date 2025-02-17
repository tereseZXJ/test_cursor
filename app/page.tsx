'use client'

import { useState } from 'react'
import { Slider } from '../components/ui/slider'

const RingLight = () => {
  const [brightness, setBrightness] = useState(50)
  const [temperature, setTemperature] = useState(50)

  const handleBrightnessChange = (value: number[]) => {
    setBrightness(value[0])
  }

  const handleTemperatureChange = (value: number[]) => {
    setTemperature(value[0])
  }

  return (
    <main 
      className="min-h-screen w-full flex flex-col items-center justify-between"
      style={{
        backgroundColor: `rgb(255, ${255 * (temperature / 100)}, ${255 * (temperature / 100)})`,
        filter: `brightness(${brightness}%)`
      }}
    >
      <div className="w-full p-4 fixed bottom-0 bg-black/20 backdrop-blur-md">
        <div className="max-w-md mx-auto space-y-6">
          <div className="space-y-2">
            <label className="text-white text-sm font-medium">亮度</label>
            <Slider
              value={[brightness]}
              onValueChange={handleBrightnessChange}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-white text-sm font-medium">色温</label>
            <Slider
              value={[temperature]}
              onValueChange={handleTemperatureChange}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default RingLight 