import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IProps extends InputHTMLAttributes<HTMLButtonElement> {
  text?: string;
  hasIcon: boolean;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
}

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const icons: any = {
  search:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IB2cksfwAAARRQTFRFAAAASk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pVwjv/QAAAFx0Uk5TADWDv+P19ufLh0YFAyuM2vr/++GfOQJf1/7qUFvYWDIvTHX590sBMLQ8IKruPhG34pmlTdMWLOvoKRnzMxg0JuUbi6gE0E61/Mx5VBKakwv9DT+QsQeSdwgPsNTBV9X7AAABhUlEQVR4nHWS61aCQBSF8RokBhutxJq0TNRMK6+V3bQ0ukMqqb3/ezQ1BjhrsX/tMx+Lc+bsEQSmUDgSjcXXRGk9IfCSkxuKij9pqfTmFoe3Mzo8ZXdWf7Cr0UMi7eXy+wdiATgM+7i8TSkpGqwySmUdmiS7OJkBxIrbzziqAsc1F2/oIBV/rzoBTv6LkAIUV2ctnkIPLX1YBTFWL2KcAY1l9wgg8Xtoqmi1mY0CezzudHF+wWwMyPH4kqB3xWwcyPP4OoPeDbNrQJPHt3foJpkVgQMe1+JQ+sxKGkT+YgPg/oH59RQKpVVeGkIfLX0iDTwe+elW2cSTm8lmFnq17qPPOswXr9w5pIHu+wMFefU+T4Rp4NG3Zufy+rY2GJr0bajvHz4uHf8edUnmji4JJlFhpW2Py58n7mPTn15e3y1YY984NPZG67zX6yr3IzrzR9qCNpn6udy+uLpJ9tk27LEGy7GFINUnFtSvWSCfOnQ+Zx7I7S8L5iIQCzPHhBqMhflC/f4BU6Uw/3BpkC8AAAAASUVORK5CYII=',
  filter:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAAXNSR0IB2cksfwAAAQ5QTFRF8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unk8unkQ40o0AAAAFp0Uk5TADnX8/KwE4j/9lWN+VoshozL/LSLSeL90vcbYma6+5xlMQZ6sbOTEYX1UjyEHp7GB0YUh7lZKMzg/jWsz1Mrd3lqGkKOFtQPvtwm378ELzPmMg7h7Nn62CW1Gbu+JwAAAQ5JREFUeJxjYCAMGJmYQYCFlY0IxRDAzgEBnFxEa+GGauHhHX5a+PgFCAFBqBYhYSBHRJRBjINEIM4gQaoWSQYpaRlCQBaqWE4eyFFQHLyBPHBalJRVVEFATR3M1YBq0dTCrUVbHKpIB8zV1dMHA2UD3FoMYdGmRrTjh6oWIy5eDGAM02KCKWdqxmBOauJnZrAgVYslgxU7Zs61hknbYMqJ2A7eQKanFjt7BxBwdALznGFaXHDrcHWDqrEGc909IBnG0wu3Fi9vqBYfoh0/TLT4+vn7+2sFQLWY+xMCgUEMKqQm/mCGEFK1cDCYSoSGhnqHQbmaoYRAOPvgDWQ6aomAafEgWotBJESHJT8RigH0OlVdPf84OAAAAABJRU5ErkJggg==',
  add:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAAXNSR0IB2cksfwAAAPZQTFRFAAAASk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pgAA4OAAAAFJ0Uk5TAB9cnsnj9f4dg97/HCy1/RSp4MGaqBNX8uqXPwsMVgSbzUoDS84KScDMlgjL+To79jAvd3bP0Cu0guvdmB5AW53C9/R1yJxagadYVZm/ygni/BkwfscAAAJfSURBVHicnVbpQtpAEB4RSHE4TLgERCoQSou2iAjIpYhcglXf/2U6EwIkmw2Ezg/YndkvOzs3gINOfKf+QFBRggH/qe/EKRfpW+gMbXQWCu8FRKIxdFAsGnEFnKuKeUiLq4mEGtfMDyjJlByRvjDkmWzucsPK57IZg3lxJQEUvhuy62LJzi+VdUOQKIiISpz5gR+y64sBllUrAuInc3/V5CrXsiy9sWEKfMdtWg5gSt/yPVbd+B3B3+4IgD91fo/lG3yHgLhrCBi+Z2u3c7auoNU9YlPQjW298U+SXy4o8oCoCyy2QXK9jJDPA6KtWogtgVUjWyttYxkltMMfEggU6WCHF2EKpGtRKoUAxUGM4zpE2KI3SJmOPtI/5Uem5A1S6iL2KAcJmXUI5RDo0+EB+Og35xUypMNP8ExPuvQKyZM/nsGPqDllLhDQEP1A/ol7h4zI6xBEVM39/UNrSy+I9d1O38SbijiG2Dam75zFZUdmXCfo5RZIwyvEolhT36lStyv2alXsP55/tJEnhivzXiHsyik8HRswMxgcH5bQOzr44ZGQZW8QTrE5rBNZLCYHEhk6skzeWy6gfXxRMkqfaDTdqS2ba2GuU5IC20R8tXPerAUWriRlvCEr48vdfkXb+uFmsbIwCtUDLemN73i3tcvKDedR1q3x8cvx74edW6ka7dVZaWHTXt8/RH5hZSSsXnZp4itHEydarkeFbn+4zZ/8sN9djwpLCYAotTAHEkUb8UAy0jb7hctAQtTuyMaeTtsVwBSe9+yA3nz/cGXQYDadfI6/vsafk+ls4JT/Aw+fVYXLsMSIAAAAAElFTkSuQmCC',
  delete:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAAXNSR0IB2cksfwAAAcJQTFRFAAAAbiU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0biU0tN66SQAAAJZ0Uk5TAAoUTVmQqb7VztO7rIhdTBAMHS+TruH4+//+/NyzjTcZAQtYmuDz/fHqlFsIAgQ/9+bjvKKbgYeev+2MOgd+ur1KLiYOEicjVY/EuX0Jo9/DWisFVsrdpLf0+cIoU/INoOLMhAPNpXA7EZUfbE5mV0fR7tZI0klU9ktSUfXUgIaRyYJPbUCDf7jBLSqOPFyWGji0ia3P7smvgwAABHxJREFUeJzFVvlDGkcUXsTIiiKuRtgHiKLCAiKigvGoBhAUpUYFotmo9dY0Hol4X7naaNqmd/v/9u3srruc6U/t+wHezDffm2/ezswbivqfTVOhrXxQpaOr9fqaWkOdsZ75F6SGxodNJjMLglkArKyt2d7SWp7jaGvvcLpEBodGyOD2eDt9XaVZ/m6DOyAM7OntC4b6H4UGBm0eYU7z0PBXI6VYI6OPkcJyYW8kOsb4YowjPj6RmJxiBcnJr9uKs6afmBCemZ1LUWlFdpqKZp7OC8BC0dS0PeMBni8aU46CFS8th3HCb5JFeIwOE2AKrmiKhtSsrmFWwwU6mSSy1jc2Syyboja2ALhn03nhtjHtUztlskztTAHwT3LyOTLqBNjaKViV2hw767iKUb/S0/UiCbC2UY4kjNrATD/uVmL7hvFzrX6BRVGbwecABiUtnUMAYTmF/m/zh8fkCVYWcae1y92tL80wvyxF2d0b3s9ldfcf7IqexjgDgY4Gqb/FA+zTJdF3HABPv1KzXh9mYU9KRGqWBWej6DN2N7AZSUisPwuBo4zCOj5xAW+PS0HnOHA9FJdT3wyWqei9pEMXBOiE3DzV89i8l50KAzRVEFdrA5hUiToRBp6JjYjAOlKJ9uK30xKvjgVPQtnz1DEOPaeXBfeCzKWSnI70gLmSuAYr2CbUG+SU8C4pykichAqior3APiBeLcDguBoi0s7pK63+Gv/OcqCxPgtUEa8GYCCeg6E4JJhM17JYxZgggI54NxYulL+JjcjDG4hIzTFfBwe0SAPuUcG51Zrw/HGmq/z+2BsOqolXDVx/LB++Emna/H7mLQc3xKOB6/DloZf0OXAWuNYb8wBHiLOINB1AME/kMrKuTWv4o7/IReIDADXEqwJL31gOdiaw9Nor/OP1kRxofBCglnjvWOiNqqEEGW4UpfL6U7XGCRtYDcStNENPRLW5MnQAB1/IYnn9sYKlE3jI6oi7j1eEV0FeHQUUaWdCiJPXCjoJYBPTW9GEV0JK7t8nc90LS2DTddgtN6NTFmiuJ67G6wJuTtoncTsPrhOVrAxOnpW/qyPDgtsupb3RCeysNJ1/D7JqUSia5uFACrr0Hg9ZiwQ0hAIwcyHdXLsHH7qpHPvO/r10BbVdzoP5ZasMtLsBFlekhqNgo8Xlm1iDV8JQ530/Y8CCGSxdNmRbxXI1rOxDx0c8c87bcoVDsFssVskXqlH+O+xZ/1LpwFLlHM0tOQu8UKjKsLqEQuXaziuM05/wQbB1W5K1eYtliissw22DeC7XVqeLvgc0TBALIKcrVryTWFDZvsulwpKfuvjBjKX0U9GQzDZGhPn3mR+ptEJNUz/Nzc4gsLYwXYyFOu/Ic4ad/Xw2MR53MDEfMxaNeMOc8JypuSv9DPp5OGsW3lsem24g9PZNR7Cmt0d4TAXcho/+UizMsu+XXz1u8YHGWfGitAieyxlqZ8p+U4r67ffPf9hYK4gMYM2mJm9jQ3kOMaZeW/fnX330zd9Hg1XvKvcrij6M/kv7BzEI1xWz7jKZAAAAAElFTkSuQmCC',
  edit:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAAXNSR0IB2cksfwAAAbBQTFRFAAAASk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pSk5pJenR8QAAAJB0Uk5TAB9cnsnj9f4dg97/HCy1/RSp4MGaqBNX8uqXPwsMVgSbzUoDS84KScDMlgjL+To79iOLVAEW2YkJsbYnFyuE+PxhtDTtcQVm7xjIR9qCD8YvHuvd0zWYXUBbnUbl2yrP8AIQt/Rswo5w+sTVKNzpw/tldLCc7Fo2ToiBsiE4eTHuTWdYp9KkgEUbB1WZv8ri6lkXTgAAAy1JREFUeJyFlulDEkEUwEcFVh0VORRcRJLTVPLKIpUytFLKDEhSK1Mj7E7LrOyw0k4x/+XezM7iHg99H2Dnzf5m5p2zhJikqrrGYrVJks1qqamuMs8bpbaunuqkvq7hWKCxyU5NYm9qrAg0OyTxktPlcLsdLqdYQGppxQmPl8+3yb52VeX3yW1c6e1AgMApPtcZDOn1oXCET7gDRiLqYnprDNs+aGVzXVEDcZppu3vwI/fIbLZXxwTYHnEPDjDxxNk+2rMxO2xnKhOE9PUzezRrsD1wYmBw6KzCsH3Kfmtm3sVPNXyOxs+Hyut61fi0MMtRInGB2T0yygfMBy2KvhFibsV9NTzCY9I7xgY94GspyfVNoETjQYZiiYuXYHb8Mh8G4THFHhogkTpRYmLSfuXqtSk4w7SigDyws7yuAzaIEbVpOIg8ff2GVz1DGF6dgX+oj7YQQtx0cDtmb2ViaghDWUpzUIOglrFNBkW53J470uVhnCHV8OtDiDuidmiX/0g5D+MFsggmtZuJu/cEcX9Jo/XDOovEQqnTTAw8EMRyeEWrd1JqIRAfl4lYfSiIwiMdQYrgcWKj1GFC1tRWkTdkBXixQOy6nFbk8RNBPDVUInGD5RjiWxbEs+fGxThiPtjSC0G8nDMSysFM5vtfCWJ9Y8WEcPONTm7vVpvkGpJG4OQ0D6UmvuS1avobo+lECeUmWdAnTPitGvWMmeAJs0UyurSsnRTE1DuEEGlJcprkH5tVTX+PESL5yQy8ERZHdaimf8AIXmLbRCnkiKKasCnnkj6uoohayCRVruRP6zF5HUbFMZQotwuSLDelJfo58KVAp3ZQQtOUeOvjTuv7uvHtey6+ixLcXXviuVVtsKM/fv7y/P5jzhMmu9oGSzpEG/+LL8+Ft/H9o3EJhv0nXxYljSLQdcKVtMv2ONBdl9FeFg+50sXHLKf/EnptlO1DrWinVa7Xg4RRHyjxwEfCFS7xkukSB9lXPhWy+fly/fjn81mu9O4jAEjrnmiqkrPIPkiKTnW8V+GDBCSZwj57UsmKAJOG7ZweyG0f/3HFJbO1mT4sjI8XDtObW0g5/weRZnZVM3mxtwAAAABJRU5ErkJggg==',
};

const Button = (props: IProps) => {
  const { className, onClick, text, hasIcon, icon, iconWidth, iconHeight } = props;
  const type = (props.type as 'submit' | 'button') || 'button';

  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {hasIcon && icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${iconWidth} ${iconHeight}`}
          width={`${iconWidth}`}
          height={`${iconHeight}`}>
          <defs>
            <image
              width={`${iconWidth}`}
              height={`${iconHeight}`}
              id={`${icon}-icon`}
              href={`${icons[icon]}`}
            />
          </defs>

          <use href={`#${icon}-icon`} x="0" y="0" />
        </svg>
      )}

      {text && text}
    </StyledButton>
  );
};

export default Button;
