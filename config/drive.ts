/**
 * Config source: https://git.io/JBt3o
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DriveConfig } from '@ioc:Adonis/Core/Drive'
import Application from '@ioc:Adonis/Core/Application'

/*
|--------------------------------------------------------------------------
| Drive Config
|--------------------------------------------------------------------------
|
| The `DriveConfig` relies on the `DisksList` interface which is
| defined inside the `contracts` directory.
|
*/
const driveConfig: DriveConfig = {
  /*
  |--------------------------------------------------------------------------
  | Default disk
  |--------------------------------------------------------------------------
  |
  | The default disk to use for managing file uploads. The value is driven by
  | the `DRIVE_DISK` environment variable.
  |
  */
  disk: Env.get('DRIVE_DISK'),

  disks: {
    local: {
      driver: 'local',
      visibility: 'public',
      root: Application.tmpPath('uploads'),
      serveFiles: true,
      basePath: '/uploads',
    },

    gcs: {
      driver: 'gcs',
      visibility: 'public',
      keyFilename: Env.get('GCS_KEY_FILENAME'),
      bucket: Env.get('GCS_BUCKET'),
      usingUniformAcl: false,
    },
  },
}

export default driveConfig
