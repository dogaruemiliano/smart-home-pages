export type AcPower = boolean;

export type AcMode = "auto" | "heat" | "cool" | "dry" | "fan";
export const acModes: AcMode[] = ["auto", "heat", "cool", "dry", "fan"];

export type AcFanSpeed = "low" | "medium" | "high" | "auto";
export const acFanSpeeds: AcFanSpeed[] = ["low", "medium", "high", "auto"];

export type AcTemperatureLimits = {
  min: number;
  max: number;
};

export type AcTemperature = {
  [key in AcMode]: number;
};

export type AcSettings = {
  power: AcPower;
  mode: AcMode;
  fanSpeed: AcFanSpeed;
  temperature: AcTemperature;
};

export const acAvailableTemperature = (mode: AcMode) => {
  let t_min: number | null;
  let t_max: number | null;

  switch (mode) {
    case "cool" || "dry":
      t_min = 19;
      t_max = 30;
      break;
    case "heat":
      t_min = 17;
      t_max = 28;
      break;
    case "auto":
      t_min = 17;
      t_max = 30;
      break;
    case "fan":
    default:
      return null;
  }

  return {
    min: t_min,
    max: t_max,
  } as AcTemperatureLimits;
};
