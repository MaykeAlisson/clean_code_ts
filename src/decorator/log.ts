export function logar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const origin = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`START - ${propertyKey} - ${new Date()}`);
        const initTime = performance.now();
        const retorno = origin.apply(this, args);
        const finalTime = performance.now();
        console.log(`FINAL - ${propertyKey} - return ${JSON.stringify(retorno)} - time - ${(initTime - finalTime) / 1000}`)
        return retorno
    }
    return descriptor;
}
