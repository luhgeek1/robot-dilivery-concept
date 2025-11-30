export enum RobotColor {
  YELLOW = 'yellow',
  BLUE = 'blue',
}

export enum RobotStatus {
  FREE = 'free',
  BUSY = 'busy',
  CHARGING = 'charging',
  ERROR = 'error',
}

export interface RobotConfig {
  color: RobotColor;
  status: RobotStatus;
}

export const STATUS_COLORS = {
  [RobotStatus.FREE]: 'rgb(34, 197, 94)',
  [RobotStatus.BUSY]: 'rgb(249, 115, 22)',
  [RobotStatus.CHARGING]: 'rgb(168, 85, 247)',
  [RobotStatus.ERROR]: 'rgb(239, 68, 68)',
};

export const BODY_COLORS = {
  [RobotColor.YELLOW]: 'rgb(251, 191, 36)',
  [RobotColor.BLUE]: 'rgb(59, 130, 246)',
};
