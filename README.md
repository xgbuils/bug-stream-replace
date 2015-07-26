#bug in stream-replace

## Install
```
git clone https://github.com/xgbuils/bug-stream-replace
npm install
```

## Reproduce bug:
```
node index.js large.txt
```

It must create a `output-large.txt` file with content `aaaaUaaaaa` because `$aaa...aaa$` must be replace by `U`. However is not replaced.

`node index.js small.txt` works fine.
