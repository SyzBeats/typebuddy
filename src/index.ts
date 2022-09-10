/**
 * ensures that any property of
 * an object is non nullable. This is non recursive so
 * if a property is an object it will not be checked.
 */
export type NoNullishProperties<T> = {
	[K in keyof T]: NonNullable<T[K]>;
};

/**
 * ensures that you cannot set the _id property
 * of the given type.
 */
export type ExcludeIds<T> = Exclude<keyof T, '_id'> & Exclude<keyof T, 'id'>;

/**
 * any type will be extended with undefined
 * to make sure that it will have to be
 * checked for existence.
 */
export type Maybe<T> = T | undefined;

/**
 * get the keys of the given type
 * as a union of strings.
 */
export type Keys<T> = keyof T;

/**
 * get all types of the given array
 * as a union.
 *
 * @example: [1, 'a', true] => number | string | boolean
 */
export type UnionOfArray<T extends any[]> = T[number];
