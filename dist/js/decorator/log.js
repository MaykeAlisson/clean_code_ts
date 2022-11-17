export function logar() {
    return function (target, propertyKey, descriptor) {
        const origin = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`START - ${propertyKey} - ${new Date().getTimezoneOffset()}`);
            const initTime = performance.now();
            const retorno = origin.apply(this, args);
            const finalTime = performance.now();
            console.log(`FINAL - ${propertyKey} - return ${JSON.stringify(retorno)} - time - ${(initTime - finalTime) / 1000}`);
            retorno;
        };
    };
}
