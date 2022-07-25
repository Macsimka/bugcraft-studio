/* eslint-disable consistent-return, no-restricted-syntax,padded-blocks,no-multi-spaces,key-spacing,comma-dangle,max-len,no-mixed-operators,curly,comma-spacing,comma-style,no-useless-computed-key */

export const getVersion = (Memory) => {
  const build = Memory.findStrPattern(' (build ');
  const buildStr = new Buffer(0xE);
  if (build.length === 0) return;
  const versionPtr = build[0];
  Memory.readData(versionPtr, buildStr, buildStr.byteLength);
  const buildFound = buildStr.toString('ascii').match(/\d/g).join('');
  console.log('# WoW Build Found', buildFound);
  if (buildFound === '3368') return { client: 'alpha', build: '0.5.3' };
  if (buildFound === '3734') return { client: 'alpha', build: '0.8.0' };
  if (buildFound === '4125') return { client: 'vanilla', build: '1.1.2' };
  if (buildFound === '4735') return { client: 'vanilla', build: '1.8.0' };
  if (buildFound === '5875') return { client: 'vanilla', build: '1.12.0' };
  if (buildFound === '8606') return { client: 'tbc', build: '2.4.3' };
  if (buildFound === '12340') return { client: 'wlk', build: '3.3.5a' };
  if (buildFound === '15595') return { client: 'ctl', build: '4.3.4' };
  if (buildFound === '18414') return { client: 'mop', build: '5.4.8' };
  if (buildFound === '20779') return { client: 'draenor', build: '6.2.3' };
  if (buildFound === '24742') return { client: 'legion', build: '7.2.5' };
  if (buildFound === '26972') return { client: 'legion', build: '7.3.5' };
};

export const alpha = {
  camera: {
    position: {
      ['0.5.3']: {
        pattern: new Buffer([0x89, 0x02, 0xD9, 0x5D, 0xF8, 0x8B,
          0x4D, 0xF8, 0xDD, 0xD8, 0x89, 0x4A, 0x04, 0xDD, 0xD8,
          0xD9, 0x45, 0xF0, 0xD8, 0x65, 0xE4, 0xD9, 0x5D, 0xFC,
          0xD9, 0x86, 0xD4, 0x00, 0x00, 0x00, 0x8B, 0x45, 0xFC,
          0xD8, 0x65, 0x08, 0x89, 0x42, 0x08]),
        fix:     new Buffer([0x90, 0x90, 0xD9, 0x5D, 0xF8, 0x8B,
          0x4D, 0xF8, 0xDD, 0xD8, 0x90, 0x90, 0x90, 0xDD, 0xD8,
          0xD9, 0x45, 0xF0, 0xD8, 0x65, 0xE4, 0xD9, 0x5D, 0xFC,
          0xD9, 0x86, 0xD4, 0x00, 0x00, 0x00, 0x8B, 0x45, 0xFC,
          0xD8, 0x65, 0x08, 0x90, 0x90, 0x90]),
      },
      ['0.8.0']: {
        pattern: new Buffer([0x89, 0x02, 0xD9, 0x5D, 0xF8, 0x8B,
          0x4D, 0xF8, 0xDD, 0xD8, 0x89, 0x4A, 0x04, 0xDD, 0xD8,
          0xD9, 0x45, 0xF0, 0xD8, 0x65, 0xE4, 0xD9, 0x5D, 0xFC,
          0xD9, 0x86, 0xD4, 0x00, 0x00, 0x00, 0x8B, 0x45, 0xFC,
          0xD8, 0x65, 0x08, 0x89, 0x42, 0x08]),
        fix:     new Buffer([0x90, 0x90, 0xD9, 0x5D, 0xF8, 0x8B,
          0x4D, 0xF8, 0xDD, 0xD8, 0x90, 0x90, 0x90, 0xDD, 0xD8,
          0xD9, 0x45, 0xF0, 0xD8, 0x65, 0xE4, 0xD9, 0x5D, 0xFC,
          0xD9, 0x86, 0xD4, 0x00, 0x00, 0x00, 0x8B, 0x45, 0xFC,
          0xD8, 0x65, 0x08, 0x90, 0x90, 0x90]),
      }
    },
    base: {
      pattern: new Buffer([0xC6, 0x83, 0x88, 0x00, 0x00, 0x00, 0x00, 0x8B,
        0x7D, 0x0C, 0x8B, 0xC3, 0xC1, 0xE8, 0x10, 0x66, 0x89, 0x45, 0xFC,
        0x66, 0xC7, 0x45, 0xFE, 0x6D, 0x6F, 0x8B, 0x4D, 0xFC, 0x89, 0x4B,
        0x0C]),
      patternFix: {
        ['0.5.3']: 0x22,
        ['0.8.0']: 0x22,
      },
      version: {
        ['0.5.3']: {
          ptrFix: 0x3D4
        },
        ['0.8.0']: {
          ptrFix: 0x6C
        }
      }
    }
  },
  CameraRot: 0xDC,
  cameraViewMatrix: {
    version: {
      ['0.5.3']: [
        /**
         * Yaw
         */
        {
          offset: 0x0053D5BB,
          pattern: new Buffer([0xD9, 0x9E, 0xD8, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x9E, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0053E141,
          pattern: new Buffer([0xD9, 0x9E, 0xD8, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x9E, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0053C613,
          pattern: new Buffer([0xD9, 0x99, 0xD8, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x99, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0053C643,
          pattern: new Buffer([0xD9, 0x99, 0xD8, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x99, 0xD0, 0x00, 0x00, 0x00])
        },
        /**
         * Pitch
         */
        {
          offset: 0x0053C5E2,
          pattern: new Buffer([0xD9, 0x99, 0xDC, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x99, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0053D500,
          pattern: new Buffer([0xD9, 0x9E, 0xDC, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x9E, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0053E11A,
          pattern: new Buffer([0xD9, 0x9E, 0xDC, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x9E, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0053D51D,
          pattern: new Buffer([0x89, 0x8E, 0xDC, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0x89, 0x8E, 0xD0, 0x00, 0x00, 0x00])
        },
      ],
      ['0.8.0']: [
        /**
         * Yaw
         */
        {
          offset: 0x0054B152,
          pattern: new Buffer([0xD9, 0x9E, 0xD8, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x9E, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0054BD01,
          pattern: new Buffer([0xD9, 0x9E, 0xD8, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x9E, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0054A1E3,
          pattern: new Buffer([0xD9, 0x99, 0xD8, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x99, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0054A213,
          pattern: new Buffer([0xD9, 0x99, 0xD8, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x99, 0xD0, 0x00, 0x00, 0x00])
        },
        /**
         * Pitch
         */
        {
          offset: 0x0054A1B2,
          pattern: new Buffer([0xD9, 0x99, 0xDC, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x99, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0054B0B4,
          pattern: new Buffer([0x89, 0x8E, 0xDC, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0x89, 0x8E, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0054BCDA,
          pattern: new Buffer([0xD9, 0x9E, 0xDC, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x9E, 0xD0, 0x00, 0x00, 0x00])
        },
        {
          offset: 0x0054B097,
          pattern: new Buffer([0xD9, 0x9E, 0xDC, 0x00, 0x00, 0x00]),
          fix:     new Buffer([0xD9, 0x9E, 0xD0, 0x00, 0x00, 0x00])
        },
      ]
    }
  },
  environment: {
    version: {
      ['0.5.3']: {
        timeOfDayPattern: new Buffer([0xE8, 0x04, 0x0C, 0x14, 0x00, 0xD9, 0x5F, 0x04]),
        timeOfDayPatternFix: new Buffer([0xE8, 0x04, 0x0C, 0x14, 0x00, 0xD9, 0x1F, 0x90]),
        timeOfDay: 0xCB23B4,
        renderFlags: 0xA4046C,
        renderFlagsDefault: 0x07104B73
      },
      ['0.8.0']: {
        timeOfDayPattern: new Buffer([0xE8, 0x43, 0xE5, 0x17, 0x00, 0xD9, 0x5E, 0x04]),
        timeOfDayPatternFix: new Buffer([0xE8, 0x43, 0xE5, 0x17, 0x00, 0xD9, 0x1E, 0x90]),
        timeOfDay: 0xC00AD4,
        renderFlags: 0xA96C30,
        renderFlagsDefault: 0x1F900B77
      }
    }
  },
};

export const vanilla = {
  CameraRot: 0xF0,
  enableCameraFacing: 0x90,
  camera: {
    position: {
      ['1.1.2']: {
        pattern: new Buffer([0x8B, 0x08, 0x8D, 0x56, 0x08, 0x89, 0x0A, 0x8B, 0x48, 0x04, 0x89, 0x4A, 0x04, 0x8B, 0x40, 0x08, 0x89, 0x42, 0x08]),
        fix:     new Buffer([0x8B, 0x08, 0x8D, 0x56, 0x08, 0x90, 0x90, 0x8B, 0x48, 0x04, 0x90, 0x90, 0x90, 0x8B, 0x40, 0x08, 0x90, 0x90, 0x90]),
      },
      ['1.8.0']: {
        pattern: new Buffer([0x8B, 0x10, 0x8D, 0x4E, 0x08, 0x89, 0x11, 0x8B, 0x50, 0x04, 0x89, 0x51, 0x04, 0x8B, 0x40, 0x08, 0x89, 0x41, 0x08]),
        fix:     new Buffer([0x8B, 0x10, 0x8D, 0x4E, 0x08, 0x90, 0x90, 0x8B, 0x50, 0x04, 0x90, 0x90, 0x90, 0x8B, 0x40, 0x08, 0x90, 0x90, 0x90]),
      },
      ['1.12.0']: {
        pattern: new Buffer([0x8B, 0x10, 0x8D, 0x4E, 0x08, 0x89, 0x11, 0x8B, 0x50, 0x04, 0x89, 0x51, 0x04, 0x8B, 0x40, 0x08, 0x89, 0x41, 0x08]),
        fix:     new Buffer([0x8B, 0x10, 0x8D, 0x4E, 0x08, 0x90, 0x90, 0x8B, 0x50, 0x04, 0x90, 0x90, 0x90, 0x8B, 0x40, 0x08, 0x90, 0x90, 0x90]),
      },
    },
    base: {
      pattern: new Buffer([0x8B ,0x11 ,0x8D ,0x45 ,0xF4 ,0x50 ,0xFF ,0x52
        ,0x04 ,0x8B ,0x4D ,0xF4 ,0x8B ,0x55 ,0xF8 ,0x8B ,0x45 ,0xFC ,0x89
        ,0x0E ,0x89 ,0x56 ,0x04 ,0x89 ,0x46 ,0x08 ,0x5E ,0x8B ,0xE5 ,0x5D]),
      patternFix: {
        ['1.1.2']: -0xA,
        ['1.8.0']: -0xD,
        ['1.12.0']: -0xD,
      },
      version: {
        ['1.1.2']: {
          ptrFix: [0x6558, 0]
        },
        ['1.8.0']: {
          ptrFix: [0x6570, 0]
        },
        ['1.12.0']: {
          ptrFix: [0x65B8, 0]
        }
      }
    }
  },
  environment: {
    version: {
      ['1.1.2']: {
        timeOfDayPattern: new Buffer([0xE8, 0x4F, 0xCD, 0x1A, 0x00, 0xD9, 0x5F, 0x04]),
        timeOfDayPatternFix: new Buffer([0xE8, 0x4F, 0xCD, 0x1A, 0x00, 0xD9, 0x1F, 0x90]),
        timeOfDay: 0x70EB04,
        renderFlags: 0x69FE7C,
        renderFlagsDefault: 0x1F110F77
      },
      ['1.8.0']: {
        timeOfDayPattern: new Buffer([0xE8, 0xFE, 0x0C, 0x1A, 0x00, 0xD9, 0x5E, 0x04]),
        timeOfDayPatternFix: new Buffer([0xE8, 0xFE, 0x0C, 0x1A, 0x00, 0xD9, 0x1E, 0x90]),
        timeOfDay: 0x85AD1C,
        renderFlags: 0x7EC93C,
        renderFlagsDefault: 0x9F110F77
      },
      ['1.12.0']: {
        timeOfDayPattern: new Buffer([0xE8, 0x8E, 0x0E, 0x1C, 0x00, 0xD9, 0x5E, 0x04]),
        timeOfDayPatternFix: new Buffer([0xE8, 0x8E, 0x0E, 0x1C, 0x00, 0xD9, 0x1E, 0x90]),
        timeOfDay: 0x8E9B64,
        renderFlags: 0x87B2A4,
        renderFlagsDefault: 0x9F910F77
      },
    }
  },
};

export const tbc = {
  CameraRot: 0x104,
  SpectatePointer: [0x00A29D28, 0x128, 0x7FC, 0x7F8, 0x720, 0x6FC],
  CameraPointer: [0x86ECCC, 0x732c, 0],
  EnableSpectate: new Buffer([0x00, 0x00, 0x7F, 0x43]),
  DisableSpectate: new Buffer([0, 0, 0, 0]),
  CameraValuesPointer: 0x00CEF468,
  Collision: 0x48,
  Speed: 0x44,
  cameraViewMatrix: {
    version: {
      ['2.4.3']: {
        pattern: new Buffer([0xD9, 0x40, 0x1C, 0xD9, 0x5D, 0xE4, 0xD9, 0x40, 0x08, 0xD9, 0x5D, 0xE8, 0xD9, 0x40, 0x14, 0xD9, 0x5D, 0xEC, 0xD9, 0x40, 0x20, 0xD9, 0x5D, 0xF0, 0xF3, 0xA5]),
        fix:     new Buffer([0xD9, 0x40, 0x1C, 0xD9, 0x5D, 0xE4, 0xD9, 0x40, 0x08, 0xD9, 0x5D, 0xE8, 0xD9, 0x40, 0x14, 0xD9, 0x5D, 0xEC, 0xD9, 0x40, 0x20, 0xD9, 0x5D, 0xF0, 0x90, 0x90])
      }
    }
  },
  environment: {
    version: {
      ['2.4.3']: {
        timeOfDayPattern: new Buffer([0xE8, 0xFF, 0x44, 0x19, 0x00, 0xD9, 0x5E, 0x04]),
        timeOfDayPatternFix: new Buffer([0xE8, 0xFF, 0x44, 0x19, 0x00, 0xD9, 0x1E, 0x90]),
        timeOfDay: 0xA18DEC,
        renderFlags: 0x9A4510,
        renderFlagsDefault: 0x1F104F73
      }
    }
  },
};

export const wlk = {
  SpectatePointer: [0x006DACA4, 0xC, 0x24, 0x8, 0x258],
  CameraPointer: [0x77436C, 0x7e20, 0],
  EnableSpectate: new Buffer([0x00, 0x00, 0x7F, 0x43]),
  DisableSpectate: new Buffer([0, 0, 0, 0]),
  CameraValuesPointer: 0x00ACE4A8,
  Collision: 0x48,
  Speed: 0x44,
  CameraRot: 0x11C,
  cameraViewMatrix: {
    version: {
      ['3.3.5a']: {
        pattern: new Buffer([0xD9, 0x40, 0x1C, 0xD9, 0x5D, 0xE4, 0xD9, 0x40, 0x08, 0xD9, 0x5D, 0xE8, 0xD9, 0x40, 0x14, 0xD9, 0x5D, 0xEC, 0xD9, 0x40, 0x20, 0xD9, 0x5D, 0xF0, 0xF3, 0xA5]),
        fix:     new Buffer([0xD9, 0x40, 0x1C, 0xD9, 0x5D, 0xE4, 0xD9, 0x40, 0x08, 0xD9, 0x5D, 0xE8, 0xD9, 0x40, 0x14, 0xD9, 0x5D, 0xEC, 0xD9, 0x40, 0x20, 0xD9, 0x5D, 0xF0, 0x90, 0x90])
      }
    }
  },
  environment: {
    version: {
      ['3.3.5a']: {
        timeOfDayPattern: new Buffer([0xE8, 0x4F, 0x4A, 0x27, 0x00, 0xD9, 0x5E, 0x04]),
        timeOfDayPatternFix: new Buffer([0xE8, 0x4F, 0x4A, 0x27, 0x00, 0xD9, 0x1E, 0x90]),
        timeOfDay: 0x938B04,
        renderFlags: 0x8D774C,
        renderFlagsDefault: 0x1F104F73
      }
    }
  },
};

export const ctl = {
  SpectatePointer: 0x163BEC,
  CameraRot: 0x104,
  CameraPointer: [0xAD7A10, 0x80D0, 0],
  EnableCorrectKeyboardControls: 0x94, // I would like to know one day why 4.3.4 is so "special"
  EnableSpectate: new Buffer([0xBA, 0x00, 0x00, 0x48, 0x00, 0xC1, 0xEA, 0x13, 0xF6, 0xC2, 0x01, 0x74, 0x18, 0xC1, 0xE9, 0x16, 0xF6, 0xC1, 0x01, 0x75, 0x0A, 0x85, 0xC0, 0x74, 0x0C, 0x83, 0x78, 0x08, 0x00, 0x75, 0x06, 0xB8, 0x01, 0x00, 0x00, 0x00, 0xC3, 0xB8, 0x01, 0x00, 0x00, 0x00, 0xC3, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC]),
  DisableSpectate: new Buffer([0x8B, 0x49, 0x08, 0x8B, 0xD1, 0xC1, 0xEA, 0x13, 0xF6, 0xC2, 0x01, 0x74, 0x18, 0xC1, 0xE9, 0x16, 0xF6, 0xC1, 0x01, 0x75, 0x0A, 0x85, 0xC0, 0x74, 0x0C, 0x83, 0x78, 0x08, 0x04, 0x75, 0x06, 0xB8, 0x01, 0x00, 0x00, 0x00, 0xC3, 0x33, 0xC0, 0xC3, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC]),
  EnableSpectateOnCam: new Buffer([2, 0x00, 0x00, 0x0]),
  DisableSpectateOnCam: new Buffer([0, 0, 0, 0]),
  CameraValuesPointer: { offset: 0x9119A0, module: true },
  Collision: 0x48,
  Speed: 0x44,
  cameraViewMatrix: {
    version: {
      ['4.3.4']: {
        pattern: new Buffer([0xF3, 0x0F, 0x11, 0x55, 0xB0, 0xF3, 0x0F, 0x11, 0x4D, 0xBC, 0xF3, 0x0F, 0x11, 0x45, 0xC0, 0xF3, 0x0F, 0x11, 0x65, 0xC4, 0xF3, 0x0F, 0x11, 0x5D, 0xC8, 0xF3, 0xA5]),
        fix:     new Buffer([0xF3, 0x0F, 0x11, 0x55, 0xB0, 0xF3, 0x0F, 0x11, 0x4D, 0xBC, 0xF3, 0x0F, 0x11, 0x45, 0xC0, 0xF3, 0x0F, 0x11, 0x65, 0xC4, 0xF3, 0x0F, 0x11, 0x5D, 0xC8, 0x90, 0x90])
      }
    }
  },
  environment: {
    version: {
      ['4.3.4']: {
        timeOfDayPattern: new Buffer([0xA3, 0xE4, 0x23, 0xEA, 0x00, 0xF3, 0x0F, 0x11, 0x05, 0xE8, 0x23, 0xEA, 0x00]),
        timeOfDayPatternFix: new Buffer([0xA3, 0xE4, 0x23, 0xEA, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90]),
        timeOfDay: 0xA423E8,
        renderFlags: 0xA741A8,
        renderFlagsDefault: 0x0001BFFF
      }
    }
  },
};

const OFFSET_FIX = 0x4F0;
export const mop = {
  SpectatePointer: [0xCFEFAC + OFFSET_FIX, 0x1504, 0x8],
  CameraRot: 0x10C,
  CameraPointer: [0xD64E5C, 0x8208, 0],
  EnableSpectate: new Buffer([0x00, 0x00, 0x48, 0x00]),
  DisableSpectate: new Buffer([0, 0, 0, 0]),
  CameraValuesPointer: { offset: 0xB68118, module: true },
  Collision: 0x48,
  Speed: 0x44,
  cameraViewMatrix: {
    version: {
      ['5.4.8']: {
        pattern: new Buffer([0x83, 0xC4, 0x18, 0x8B, 0xC8, 0xE8, 0xB2, 0x9D, 0xFF, 0xFF, 0x6A, 0x09, 0x59, 0x8B, 0xF0, 0xF3, 0xA5]),
        fix:     new Buffer([0x83, 0xC4, 0x18, 0x8B, 0xC8, 0xE8, 0xB2, 0x9D, 0xFF, 0xFF, 0x6A, 0x09, 0x59, 0x8B, 0xF0, 0x90, 0x90])
      }
    }
  },
  environment: {
    version: {
      ['5.4.8']: {
        timeOfDay: 0xC8DF14 + OFFSET_FIX,
        timeOfDaySpeed: 0xC8DF00 + OFFSET_FIX,
        renderFlags: 0xE371D4 + OFFSET_FIX,
        renderFlagsDefault: 0x0001BFFF + OFFSET_FIX
      }
    }
  },
};

export const draenor = {
  SpectatePointer: [0x00E379B0, 0xD4, 0x50, 0x350],
  CameraRot: 0x128,
  CameraPointer: [0xEAF270, 0x7610, 0],
  EnableSpectate: new Buffer([0x00, 0x00, 0x48, 0x00]),
  DisableSpectate: new Buffer([0, 0, 0, 0]),
  CameraValuesPointer: 0x01325968,
  Collision: 0x80,
  Speed: 0x7C,
  cameraViewMatrix: {
    version: {
      ['6.2.3']: {
        pattern: new Buffer([0x83, 0xC4, 0x18, 0x8B, 0xC8, 0xE8, 0xB2, 0x9D, 0xFF, 0xFF, 0x6A, 0x09, 0x59, 0x8B, 0xF0, 0xF3, 0xA5]),
        fix:     new Buffer([0x83, 0xC4, 0x18, 0x8B, 0xC8, 0xE8, 0xB2, 0x9D, 0xFF, 0xFF, 0x6A, 0x09, 0x59, 0x8B, 0xF0, 0x90, 0x90])
      }
    }
  },
  environment: {
    version: {
      ['6.2.3']: {
        timeOfDay: 0xD7D614,
        timeOfDaySpeed: 0xD7D600,
        renderFlags: 0xF8422C,
        renderFlagsDefault: 0x00011FFF
      }
    }
  },
};

export const legion = {
  EnableSpectate: new Buffer([0x00, 0x00, 0x48, 0x00]),
  DisableSpectate: new Buffer([0, 0, 0, 0]),
  Collision: 0x90,
  Speed: 0x84,
  CameraRot: 0x124,
  base: {
    version: {
      ['7.2.5']: {
        SpectatePointer: [0x00EE6A74, 0x4, 0x28, 0x8, 0x380],
        CameraPointer: [0xFBDE0C, 0x324c, 0],
        CameraValuesPointer: 0xFD7BC8,
      },
      ['7.3.5']: {
        SpectatePointer: [0x01226DA0, 0x4, 0x28, 0x8, 0x384],
        CameraPointer: [0x11DF9A4, 0x0324C, 0],
        CameraValuesPointer: 0x11F57C8,
      }
    }
  },
  cameraViewMatrix: {
    version: {
      ['7.2.5']: {
        pattern: new Buffer([0xE8, 0xC2, 0xA7, 0xFF, 0xFF, 0x6A, 0x09, 0x59, 0x8B, 0xF0, 0xF3, 0xA5]),
        fix:     new Buffer([0xE8, 0xC2, 0xA7, 0xFF, 0xFF, 0x6A, 0x09, 0x59, 0x8B, 0xF0, 0x90, 0x90])
      },
      ['7.3.5']: {
        pattern: new Buffer([0xE8, 0x6D, 0xA7, 0xFF, 0xFF, 0x6A, 0x09, 0x59, 0x8B, 0xF0, 0xF3, 0xA5]),
        fix:     new Buffer([0xE8, 0x6D, 0xA7, 0xFF, 0xFF, 0x6A, 0x09, 0x59, 0x8B, 0xF0, 0x90, 0x90])
      }
    }
  },
  environment: {
    version: {
      ['7.2.5']: {
        timeOfDay: 0xE116C4,
        timeOfDaySpeed: 0xE116B0,
        renderFlags: 0x102FF3C,
        renderFlagsDefault: 0x7FF7FFFF
      },
      ['7.3.5']: {
        timeOfDay: 0,
        timeOfDaySpeed: 0,
        renderFlags: 0x1252CC0,
        renderFlagsDefault: 0x7FF7FFFF
      }
    }
  },
};
