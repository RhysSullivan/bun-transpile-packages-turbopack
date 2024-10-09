export function getDemo(){
    return "hello world"
}

export function HelloWorld(){
    return <div>{getDemo()}</div>
}