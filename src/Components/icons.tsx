import React from "react"

export const DirectionIcon: React.FC<{ className?: string; }> = React.memo(({ className }) => {
    return (
        <>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
                <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="#323232" strokeWidth="2" />
                <path d="M19 12H21" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 12H5" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19L12 21" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3L12 5" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#323232" strokeWidth="2" />
            </svg>
        </>
    )
})
export const SunIcon: React.FC<{ className?: string; }> = React.memo(({ className }) => {
    return (
        <>
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="40" fill="#FFA726" />
                <g stroke="#FFA726" strokeWidth="10">
                    <line x1="100" y1="20" x2="100" y2="0" />
                    <line x1="100" y1="200" x2="100" y2="180" />
                    <line x1="20" y1="100" x2="0" y2="100" />
                    <line x1="200" y1="100" x2="180" y2="100" />
                    <line x1="150" y1="50" x2="170" y2="30" />
                    <line x1="50" y1="150" x2="30" y2="170" />
                    <line x1="150" y1="150" x2="170" y2="170" />
                    <line x1="50" y1="50" x2="30" y2="30" />
                </g>
            </svg>

        </>
    )
})
export const HumidityIcon: React.FC<{ className?: string; }> = React.memo(({ className }) => {
    return (
        <>
            <svg width="60" height="51" viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={className ?? ""}>
                <rect width="60" height="50.1266" fill="url(#pattern0_17_227)" />
                <defs>
                    <pattern id="pattern0_17_227" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_17_227" transform="scale(0.0126582 0.0151515)" />
                    </pattern>
                    <image id="image0_17_227" width="79" height="66" xlinkHref="data:image/png;base64,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" />
                </defs>
            </svg>


        </>
    )
})
export const WindSpeed: React.FC<{ className?: string; }> = React.memo(({ className }) => {
    return (
        <>
            <svg width="60" height="50.13" viewBox="0 0 60 50.13" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
                <g stroke="#FFFFFF" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 20h30c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8" />
                    <path d="M5 32h35c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8" />
                    <path d="M30 26h15" />
                    <path d="M20 12h5" />
                </g>
            </svg>
        </>
    )
})
export const PressureIcon: React.FC<{ className?: string; }> = React.memo(({ className }) => {
    return (
        <>
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" className={className ?? ""}>
                <rect width="58" height="58" fill="url(#pattern0_17_217)" />
                <defs>
                    <pattern id="pattern0_17_217" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_17_217" transform="scale(0.015625)" />
                    </pattern>
                    <image id="image0_17_217" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6klEQVR4nO2bW4hWVRTHz8ykZkkqBllYOqNRlFbmQy9mhaJoGlFSFDVlVkZiRWYFSRFpaDR2ExvtIqO99KINZSJiSdCDYdFDBKU2JF7SJs1S08p+sZ117LRmn/Ptfc4+4wx8fxhm+L5127d123uiqIoqqqiiivIA1ABXAHOAZuBTYAdwADguP+bv7cAnQmNoRxneqAcP+jrgHWA/+WF43wbG9YjJAPoAD8pqhsY24H6gd9RNV/wuYBflYydwR9RdAIyQc52FX4A1wFxgMnAJMNCspvwMlM+mAE8Aa8UvZGET0HC6B38bcCjFwKNACzAeqM0huxaYIDKMLBt+BaaXM7rKW35RilGH5bvzokAwsoDFwJEUnQu7zEkCdcC7KYaYrTu0RN1DgdYU3SZa1JWlO7nyRpHGH8CjURcBaJSdprGq1J2AfdvvNomOo7McUoHGJExPA8Md5F0pujUWRCU6PI3vgWEOvPOF/nWHlY3xJXBDBfphkh9o3JpnjJVWT3v7XS6DF/4bhafdJEsZdM8m5B9ycaRAPbBH2XbQfO5im+u513H+iMu2T8jomwhlqWFLOdenPOSPtoTKja78mQDutmyxGTnkfCy8H2XQmGIIKZbO9JRvUnCN233ttOX2Or1dG+UAMFv4/wLOT6F5CNia9wwDHypbfyxUO9B5Vg/b4jzQH3jEwWHFeLKATSZDfBE4x/Jdg+UozCxy9rcrYYtSaFfK9/MryPxG6L4tYNMKkbEyheZlS6Tyzw2A6y3JTqetC0xTdM9kyHwpQXdNjsG/oXR1OirAYMsuGOuj6ySkmZFES2QB8D6d8ZjDpDZHHpB8P4k/gVdTaFcr2hVRjtner4SMz6A3pexrwO9Ce28K3RkSo+NK7iwPm+4Tvn2SkV6YQTtR2b7P6xjQkZLqer5iSQsMqNSsUDvmTmej/kuo+jgWbPFExxjpo2iOYl7jY2gF2fcET1bsej5QY5jtw9ysmB8PXNufELnm90WhZCs9prOUxDIf5s2KeXJg475IyM4MnQV0TFVj2OTD3KaYLw5s3HMquVoSutsrjjmJHT7M7Yp5kCVK9CpgnIkYGksKyOulvTxwrpL/s4/A44r5f6sD9JM4bLKsdbKCszzkm6iisd+Df5boXCc2GFv6WeqYJI6FnICahCOL8Y9rT67IBEiIM7qSOGHZAYUmoD3rCAhNskHyt1RxfR3lN1km4C2P3sJW0RnjNwtdoSPwQyUnCKwHXgFuMgmQs/AO3t4yCaY0jvGZp4wBUocYG9aHdoKbFfMUH+M89CQ7TWZbjwgoe1qRMNismOeGMqxCsvJCQNnziiRCc0J0gRz0XGa5+KwNJFtfoDzswzxKMR8o69ZF+ZtjwFUBZCarzhiXFy2HJ3h46dEeupqkl2ear/0rdH5do8wkZfte764Qna/AWhx6dY2yjU3bfIyXwmzZY0TmTtGReUyA95Tty/MoHaeEmDbT4IwGxNeKvtFbqduNEaJrYgrtBdK+K9wSq7FcOy1OoTOPH5JYmnOsWfYsVTrW2La1Jcn6LveFKfCAZRfUp5z7uMT9vIx3PFLwxPnJV8DZFprhltX3vsTRGZs5d0m0ptAOAbaEfBiR0kzZknbLLMVREm1FqtaTMD0+OsN62RAqhmchTYdUiBphns/Q8SBJH4XC8ToUgKstW39DSAUN0sZOYrfr9XiZENtMnNeJW1jbgOmWLbYt2D18PpvqLdd3pqi6uSyFCy2TsMcn8wu87fXKGzxfptIa07joJo+kbE/mlneF8rqUSUBy+tJeb0qc16Hu1OBLfyandsKCFEOOyhW19RFEHkh622Tx9PGZL2/bZwG4xVJ2Jo/FaqkT6nLutEkiwzbw2NuX4/A8PfFGsnFQGhTz5MbmUtNoTTyWHiSfTRWaVkvY1djQHcLwKZgHSfImp2y0nZYH0i6Q1ZwplxWhYaq6GYVz+y50ktfKe56fCgx6r3j3sT3iX2YyJmOkPJN7U+qKbXL5Ev/TVLt8Zr5bJrTuPbwqqqiiiiqiXPgX5ogpayN4/tAAAAAASUVORK5CYII=" />
                </defs>
            </svg>

        </>
    )
})
export const UVIcon: React.FC<{ className?: string; }> = React.memo(({ className }) => {
    return (
        <>
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" className={className ?? ""}>
                <rect width="58" height="58" fill="url(#pattern0_17_212)" />
                <defs>
                    <pattern id="pattern0_17_212" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_17_212" transform="scale(0.015625)" />
                    </pattern>
                    <image id="image0_17_212" width="64" height="64" xlinkHref="data:image/png;base64,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" />
                </defs>
            </svg>

        </>
    )
})

