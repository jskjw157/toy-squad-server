import fs from 'fs';
import appRoot from 'app-root-path';
import rfs from 'rotating-file-stream';

export const accessLogStream = fs.createWriteStream(`${appRoot}/src/log/access.log`, { flags: 'a' });

export const accessLogStream1D = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: `${appRoot}/src/log/access.log`
  })