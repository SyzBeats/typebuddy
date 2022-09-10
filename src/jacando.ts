type AG = {
    boring: boolean;
    loyal?: boolean;
    young?: boolean;
}

type Jacando<Type> = {
    [Property in keyof Type as Exclude<Property, "boring">]: Type[Property];
};

declare const otherCompany:AG;
otherCompany.boring = true;

const jacando : Jacando<AG> = {
    loyal: true,
    young: true
}

// if the code says so, it must be true
jacando.boring;
