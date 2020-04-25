import React from 'react';

interface IProps {
  level: number;
}

const DifficultyIcon = (props: IProps) => {
  const { level } = props;

  return level === 1 ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
      <defs>
        <image
          width="20"
          height="20"
          id="easy-icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAMAAABBJv+bAAAAAXNSR0IB2cksfwAAAXRQTFRFAAAASk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5p7lCengAAAHx0Uk5TAFhSFODcEXK9xWoN5UBH4gogQmWMv7gDBL68i2RBH8Puro9xJSiQr+/hYGY9Ot9s3jU/REzGNDvEBTLMFRorVdFiws5h00/0Ww8QXsgOZ11GGenZev8W2iJDaI66imMez/b+9bZN7EntNgHdyQfkI/z7u8dFgPdXDBL4C1nDi68AAAEzSURBVHicY2BAAYxMDHgAMwsrGx5pdg5OLtyy3Dy8fPwCWKUEhYRFRMXEJSSlpGVk5TCk5RUUlZRVGBhU2dXUNTgwpIU0tcQhLHFtFh1M03X19MHy4uwGhthsN2I1BlEmrLpYHSdgagaizC0ssUpbWdtIyGiJ21rbYZW2d3B0EHVydnF1wyrN7m7q4enl7eOuj1VaVsYXRHn6YXrLPwCVjxpzgUHBXsh8tJgLCQ31RnEGSsyFKYSGhnMj+EgxFxEZFW0RCgQxsXFC8Rgxl5AYCgNJySkYMZeaBpcO5U/HjDlZuDyLLEgUPebSMyCymplZYF1oMcecDZHOyYUYihZzVlDdefkQabSY0yoILSwqLghNLIFIo8VcaRlneUWlTEKVIzTIUGOOz7saRLFpZ0KkkWMOAByQR9DmSeakAAAAAElFTkSuQmCC"
        />
      </defs>
      <use href="#easy-icon" x="0" y="1" />
    </svg>
  ) : level === 2 ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
      <defs>
        <image
          width="20"
          height="20"
          id="medium-icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAMAAABBJv+bAAAAAXNSR0IB2cksfwAAAexQTFRFAAAASk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk1oSU1qSk5pSk5pSk5pR1JmUFBwSk5pSk5pSU1pSU9qSk5pSk5pRlFoTk5iSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pS0tpSExrSk1oSk5qS01qSU1oTExmSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSU9qSU5pSU1pS05qSk9pSk5pSk5pSk5pSk1pTFBoAAAASk5pSk5pSk5pTU1mSk1pSUltSk5pSk5pTExrSVBmSk5pSk5pSk5pSk5pSk5pSk1qSk5nSk5pSk5pSk5pSk5pSk5pSk5pSk5qSU9qQFVqR1VjSk9pSU5oSk5pS09oRkZ0S0tpS01p0U8fqgAAAKR0Uk5TAFhSFODcEXK9xWoN5UBH4gogQmWMv7gDBL68i2RBH8Puro9xJSiQr+/hYGY9Ot9s3jU/REzGNDvEBTLMFRorVdFiws5h00/0Ww8QXsgOZ11GXUYZ6dkZEHr/el4W2hYNIkNojrqKYx4iQ466Y0Iez/b+9bZN7ElN7ElB4O02Ae02Ad3JBxTJB+QjMiP8+7vHRWBFgPdXDBL4gFcMEmRiC0cLEWbeEiVEAAABdklEQVR4nGNgQAGMTAx4ADMLKxseaXYOTi7cstw8vHz8AlilBIWERUTFxCUkpaRlZOUwpOUVFJWUVRgYVNnV1DU4MKSFNLXEISxxbRYdTNN19fTB8uLsBobYbDdiNQZRJqy6WB0nYGoGoswtLLFKW1nbSMhoidta22GVtndwdBB1cnZxdcMqze5u6uHp5e3jro9VWlbGF0R5+mF6yz8AlR8YhMwLDgn1QuaHhYSGI3EjIiO9kaWjIiOjEbwYhcjIWG4EPw7EjwczExKTki0igSAlNU0onYEhIzMpC8zPTs3JzWPIL4iEgcKiYgZ0fkkpnBvJX8bAUF6BxK8EehcuzyILsq0KLl9dBeKX1UB4mrV1YNdU1kP5DY0gLnMThNvcAnF3K5Tf1g7mWkF1d3RCpLuguju6wVytnsjevv6eyIIJEOmJMP4kMHfyFM6p06bL5M9whEjPnMI5a/acufkz5oG5fN7zQRSbdi1EekH0QhC1aHEDAwMAujBwrZPrJrUAAAAASUVORK5CYII="
        />
      </defs>
      <use href="#medium-icon" x="0" y="1" />
    </svg>
  ) : level === 3 ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
      <defs>
        <image
          width="20"
          height="20"
          id="complex-icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAMAAABBJv+bAAAAAXNSR0IB2cksfwAAAdFQTFRFAAAAR01lSU1qPVJmSU5oSU5pUFBwR0tpSk5pR09qRkZdSk1pSk1oOztOS0tpRUhrSkxnSktmSU1oSU1qSk5nS0tqRklkRERmSk5pSk5pSU1oSk1oSU1oSUxqSE5pSU5pRk1pS0tqSk9pSUxoSk1oTExoAAAATU1mSk1pSkxoSUlJR0dmSk1oSUlmSEpoSk5oSU1pSk5pSU1oSk5kSk5qSU1oSk5pRkxqQFVVR1VVSk1pSU1pSUtlSEtlRkZ0S0tpS0tpSk5pSk5pSk1oSk5pSk5pSk5pSk5pR1JmSk5pSk5pSU1pSU9qSk5pSk5pSk5pSk5pRlFoTk5iSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSExrSk1oSk5qS01qSU1oTExmSk5pSk5pSk5pSk5pSk5pSk5pSk5pSU9qSU5pSU1pSk5pSk5pS05qSk5pSk5pSk5pSk5pSk1pTFBoSk5pSk5pSk5pSk5pSk1pSUltSk5pSk5pSk5pTExrSVBmSk5pSk5pSk5pSk5pSk5pSk1qSk5nSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSU9qQFVqR1VjSk9pSU5oSk5pSk5pSk5pSk5pS09oS01pWQeURQAAAJt0Uk5TAF1GGenZEHr/Xhbu2g0iQ2iOxLqKY0Iez/b+9bZN7OJJQeDt4TYBFN3JBzLkI2D8+7vHRYD3xVcMEmT4YkcLEWZdRl0Z6dkQGXpeel4W7toNFg0iQ2iOxLqKY0IeQ466Y0Ie/vW2TeziSU3sSUHgQe3hNgHtNhTdyQfJBzLkIzIjYPz7x0VgRYD3VwwSZPhiVwwSZGJHCxFmR2aW7AlVAAABWUlEQVR4nGNgQAGMTAx4ADMLKxseaXYODk7cslzcHBw8vFil+PgFBIU4gEBYRFRMHENaQpIDBqSkZTCkZeXg0hzyCpimK8LllRSx2a6gDJFVUVXDJq2uAZHW1MLqdm2obh1drNJ6+hwGhkb6HJLGWKVNTM3MLSytJKxtsErbctqBKHsHVQwpRydUvjNKzLm4urkj8z1c3ZBjzpODwwtZ2puDwwfB8/Xj4PAPQPADQfwgMDM4JDQsHOTdiMio6BhgzMWGxoH58ZEJiUnIMZWcksqAzk9LR8RURiYDQ1Y2Ej+HgSEXLp+XC7ItHy6vlA/iZxZAeIVFxWDX5JRA+aXgmCsrh3ArKiHuVofyq6rB3Bqo7to6iHQ9VHdtA5jb2MTRbNjSxCHZCpFug/HbwdyOTrOu7p5eib5+iLRJp9mEiZMmS/RNAXOnek0DUdNnFEGkZ/pAYm5WKQMDAHcQRUbtjZYeAAAAAElFTkSuQmCC"
        />
      </defs>
      <use href="#complex-icon" x="0" y="1" />
    </svg>
  ) : (
    <></>
  );
};

export default DifficultyIcon;
