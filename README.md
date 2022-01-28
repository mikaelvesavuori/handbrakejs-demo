# Using `handbrake-js` to automate transcoding

Just a very basic example of using `handbrake-js` to transcode a video.

## Installation

Run `npm install` or `yarn install`.

## Configuration

You will need to supply your own video; place it in `/input`.

## Running the code

Run `npm start` or `yarn start`.

You will get output similar to:

```
> handbrakejs-demo@1.0.0 start
> npx ts-node index.ts

Percent complete: 15.37, ETA:
Percent complete: 21.99, ETA:
Percent complete: 25.77, ETA:
Percent complete: 35.22, ETA:
Percent complete: 39.01, ETA:
Percent complete: 45.86, ETA:
Percent complete: 53.43, ETA:
Percent complete: 54.61, ETA:
Percent complete: 62.17, ETA:
Percent complete: 64.07, ETA:
Percent complete: 72.34, ETA:
Percent complete: 74.47, ETA:
Percent complete: 84.16, ETA:
Percent complete: 88.18, ETA:
Percent complete: 99.53, ETA: 00h00m01s
Percent complete: 99.53, ETA: 00h00m01s
Percent complete: 99.53, ETA: 00h00m01s
Percent complete: 99.53, ETA: 00h00m01s
Percent complete: 100, ETA: 00h00m01s
Size of original file: 17530931
Size of compressed file: 5021897
28.65%
```

Finished videos will end up in `/output`.
