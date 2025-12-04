
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Salon
 * 
 */
export type Salon = $Result.DefaultSelection<Prisma.$SalonPayload>
/**
 * Model SalonType
 * 
 */
export type SalonType = $Result.DefaultSelection<Prisma.$SalonTypePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model SalonService
 * 
 */
export type SalonService = $Result.DefaultSelection<Prisma.$SalonServicePayload>
/**
 * Model Deal
 * 
 */
export type Deal = $Result.DefaultSelection<Prisma.$DealPayload>
/**
 * Model WaitingList
 * 
 */
export type WaitingList = $Result.DefaultSelection<Prisma.$WaitingListPayload>
/**
 * Model SalonImage
 * 
 */
export type SalonImage = $Result.DefaultSelection<Prisma.$SalonImagePayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  BUSINESS: 'BUSINESS',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const AppStatus: {
  APPLIED: 'APPLIED',
  REVIEWED: 'REVIEWED',
  INTERVIEW: 'INTERVIEW',
  REJECTED: 'REJECTED',
  HIRED: 'HIRED'
};

export type AppStatus = (typeof AppStatus)[keyof typeof AppStatus]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type AppStatus = $Enums.AppStatus

export const AppStatus: typeof $Enums.AppStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salon`: Exposes CRUD operations for the **Salon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salons
    * const salons = await prisma.salon.findMany()
    * ```
    */
  get salon(): Prisma.SalonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salonType`: Exposes CRUD operations for the **SalonType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalonTypes
    * const salonTypes = await prisma.salonType.findMany()
    * ```
    */
  get salonType(): Prisma.SalonTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salonService`: Exposes CRUD operations for the **SalonService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalonServices
    * const salonServices = await prisma.salonService.findMany()
    * ```
    */
  get salonService(): Prisma.SalonServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deal`: Exposes CRUD operations for the **Deal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deals
    * const deals = await prisma.deal.findMany()
    * ```
    */
  get deal(): Prisma.DealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waitingList`: Exposes CRUD operations for the **WaitingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaitingLists
    * const waitingLists = await prisma.waitingList.findMany()
    * ```
    */
  get waitingList(): Prisma.WaitingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salonImage`: Exposes CRUD operations for the **SalonImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalonImages
    * const salonImages = await prisma.salonImage.findMany()
    * ```
    */
  get salonImage(): Prisma.SalonImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Salon: 'Salon',
    SalonType: 'SalonType',
    Service: 'Service',
    SalonService: 'SalonService',
    Deal: 'Deal',
    WaitingList: 'WaitingList',
    SalonImage: 'SalonImage',
    Job: 'Job',
    Application: 'Application'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "salon" | "salonType" | "service" | "salonService" | "deal" | "waitingList" | "salonImage" | "job" | "application"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Salon: {
        payload: Prisma.$SalonPayload<ExtArgs>
        fields: Prisma.SalonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          findFirst: {
            args: Prisma.SalonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          findMany: {
            args: Prisma.SalonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>[]
          }
          create: {
            args: Prisma.SalonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          createMany: {
            args: Prisma.SalonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>[]
          }
          delete: {
            args: Prisma.SalonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          update: {
            args: Prisma.SalonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          deleteMany: {
            args: Prisma.SalonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>[]
          }
          upsert: {
            args: Prisma.SalonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonPayload>
          }
          aggregate: {
            args: Prisma.SalonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalon>
          }
          groupBy: {
            args: Prisma.SalonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalonCountArgs<ExtArgs>
            result: $Utils.Optional<SalonCountAggregateOutputType> | number
          }
        }
      }
      SalonType: {
        payload: Prisma.$SalonTypePayload<ExtArgs>
        fields: Prisma.SalonTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalonTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalonTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>
          }
          findFirst: {
            args: Prisma.SalonTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalonTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>
          }
          findMany: {
            args: Prisma.SalonTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>[]
          }
          create: {
            args: Prisma.SalonTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>
          }
          createMany: {
            args: Prisma.SalonTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalonTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>[]
          }
          delete: {
            args: Prisma.SalonTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>
          }
          update: {
            args: Prisma.SalonTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>
          }
          deleteMany: {
            args: Prisma.SalonTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalonTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalonTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>[]
          }
          upsert: {
            args: Prisma.SalonTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonTypePayload>
          }
          aggregate: {
            args: Prisma.SalonTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalonType>
          }
          groupBy: {
            args: Prisma.SalonTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalonTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalonTypeCountArgs<ExtArgs>
            result: $Utils.Optional<SalonTypeCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      SalonService: {
        payload: Prisma.$SalonServicePayload<ExtArgs>
        fields: Prisma.SalonServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalonServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalonServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>
          }
          findFirst: {
            args: Prisma.SalonServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalonServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>
          }
          findMany: {
            args: Prisma.SalonServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>[]
          }
          create: {
            args: Prisma.SalonServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>
          }
          createMany: {
            args: Prisma.SalonServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalonServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>[]
          }
          delete: {
            args: Prisma.SalonServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>
          }
          update: {
            args: Prisma.SalonServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>
          }
          deleteMany: {
            args: Prisma.SalonServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalonServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalonServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>[]
          }
          upsert: {
            args: Prisma.SalonServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonServicePayload>
          }
          aggregate: {
            args: Prisma.SalonServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalonService>
          }
          groupBy: {
            args: Prisma.SalonServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalonServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalonServiceCountArgs<ExtArgs>
            result: $Utils.Optional<SalonServiceCountAggregateOutputType> | number
          }
        }
      }
      Deal: {
        payload: Prisma.$DealPayload<ExtArgs>
        fields: Prisma.DealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          findFirst: {
            args: Prisma.DealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          findMany: {
            args: Prisma.DealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>[]
          }
          create: {
            args: Prisma.DealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          createMany: {
            args: Prisma.DealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>[]
          }
          delete: {
            args: Prisma.DealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          update: {
            args: Prisma.DealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          deleteMany: {
            args: Prisma.DealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>[]
          }
          upsert: {
            args: Prisma.DealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          aggregate: {
            args: Prisma.DealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeal>
          }
          groupBy: {
            args: Prisma.DealGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealCountArgs<ExtArgs>
            result: $Utils.Optional<DealCountAggregateOutputType> | number
          }
        }
      }
      WaitingList: {
        payload: Prisma.$WaitingListPayload<ExtArgs>
        fields: Prisma.WaitingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaitingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaitingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>
          }
          findFirst: {
            args: Prisma.WaitingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaitingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>
          }
          findMany: {
            args: Prisma.WaitingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>[]
          }
          create: {
            args: Prisma.WaitingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>
          }
          createMany: {
            args: Prisma.WaitingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaitingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>[]
          }
          delete: {
            args: Prisma.WaitingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>
          }
          update: {
            args: Prisma.WaitingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>
          }
          deleteMany: {
            args: Prisma.WaitingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaitingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaitingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>[]
          }
          upsert: {
            args: Prisma.WaitingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitingListPayload>
          }
          aggregate: {
            args: Prisma.WaitingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaitingList>
          }
          groupBy: {
            args: Prisma.WaitingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaitingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaitingListCountArgs<ExtArgs>
            result: $Utils.Optional<WaitingListCountAggregateOutputType> | number
          }
        }
      }
      SalonImage: {
        payload: Prisma.$SalonImagePayload<ExtArgs>
        fields: Prisma.SalonImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalonImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalonImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>
          }
          findFirst: {
            args: Prisma.SalonImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalonImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>
          }
          findMany: {
            args: Prisma.SalonImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>[]
          }
          create: {
            args: Prisma.SalonImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>
          }
          createMany: {
            args: Prisma.SalonImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalonImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>[]
          }
          delete: {
            args: Prisma.SalonImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>
          }
          update: {
            args: Prisma.SalonImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>
          }
          deleteMany: {
            args: Prisma.SalonImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalonImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalonImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>[]
          }
          upsert: {
            args: Prisma.SalonImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalonImagePayload>
          }
          aggregate: {
            args: Prisma.SalonImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalonImage>
          }
          groupBy: {
            args: Prisma.SalonImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalonImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalonImageCountArgs<ExtArgs>
            result: $Utils.Optional<SalonImageCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    salon?: SalonOmit
    salonType?: SalonTypeOmit
    service?: ServiceOmit
    salonService?: SalonServiceOmit
    deal?: DealOmit
    waitingList?: WaitingListOmit
    salonImage?: SalonImageOmit
    job?: JobOmit
    application?: ApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    salons: number
    applications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salons?: boolean | UserCountOutputTypeCountSalonsArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type SalonCountOutputType
   */

  export type SalonCountOutputType = {
    services: number
    images: number
    deals: number
    jobs: number
  }

  export type SalonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | SalonCountOutputTypeCountServicesArgs
    images?: boolean | SalonCountOutputTypeCountImagesArgs
    deals?: boolean | SalonCountOutputTypeCountDealsArgs
    jobs?: boolean | SalonCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonCountOutputType
     */
    select?: SalonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonServiceWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonImageWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountDealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealWhereInput
  }

  /**
   * SalonCountOutputType without action
   */
  export type SalonCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type SalonTypeCountOutputType
   */

  export type SalonTypeCountOutputType = {
    salons: number
  }

  export type SalonTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salons?: boolean | SalonTypeCountOutputTypeCountSalonsArgs
  }

  // Custom InputTypes
  /**
   * SalonTypeCountOutputType without action
   */
  export type SalonTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonTypeCountOutputType
     */
    select?: SalonTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalonTypeCountOutputType without action
   */
  export type SalonTypeCountOutputTypeCountSalonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    salons: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salons?: boolean | ServiceCountOutputTypeCountSalonsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountSalonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonServiceWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    displayName: string | null
    phone: string | null
    profilePicture: string | null
    accessToken: string | null
    refreshToken: string | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    lastLoginAt: Date | null
    CVR: string | null
    address: string | null
    city: string | null
    zipCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.RoleName | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    displayName: string | null
    phone: string | null
    profilePicture: string | null
    accessToken: string | null
    refreshToken: string | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    lastLoginAt: Date | null
    CVR: string | null
    address: string | null
    city: string | null
    zipCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    role: $Enums.RoleName | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    displayName: number
    phone: number
    profilePicture: number
    accessToken: number
    refreshToken: number
    isEmailVerified: number
    emailVerificationToken: number
    passwordResetToken: number
    passwordResetExpires: number
    lastLoginAt: number
    CVR: number
    address: number
    city: number
    zipCode: number
    country: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    phone?: true
    profilePicture?: true
    accessToken?: true
    refreshToken?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    lastLoginAt?: true
    CVR?: true
    address?: true
    city?: true
    zipCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    phone?: true
    profilePicture?: true
    accessToken?: true
    refreshToken?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    lastLoginAt?: true
    CVR?: true
    address?: true
    city?: true
    zipCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    phone?: true
    profilePicture?: true
    accessToken?: true
    refreshToken?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    lastLoginAt?: true
    CVR?: true
    address?: true
    city?: true
    zipCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    displayName: string
    phone: string | null
    profilePicture: string | null
    accessToken: string | null
    refreshToken: string | null
    isEmailVerified: boolean
    emailVerificationToken: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    lastLoginAt: Date | null
    CVR: string | null
    address: string | null
    city: string | null
    zipCode: string | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    role: $Enums.RoleName | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    phone?: boolean
    profilePicture?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    lastLoginAt?: boolean
    CVR?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
    salons?: boolean | User$salonsArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    phone?: boolean
    profilePicture?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    lastLoginAt?: boolean
    CVR?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    phone?: boolean
    profilePicture?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    lastLoginAt?: boolean
    CVR?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    phone?: boolean
    profilePicture?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    lastLoginAt?: boolean
    CVR?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "displayName" | "phone" | "profilePicture" | "accessToken" | "refreshToken" | "isEmailVerified" | "emailVerificationToken" | "passwordResetToken" | "passwordResetExpires" | "lastLoginAt" | "CVR" | "address" | "city" | "zipCode" | "country" | "createdAt" | "updatedAt" | "deletedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salons?: boolean | User$salonsArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      salons: Prisma.$SalonPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      displayName: string
      phone: string | null
      profilePicture: string | null
      accessToken: string | null
      refreshToken: string | null
      isEmailVerified: boolean
      emailVerificationToken: string | null
      passwordResetToken: string | null
      passwordResetExpires: Date | null
      lastLoginAt: Date | null
      CVR: string | null
      address: string | null
      city: string | null
      zipCode: string | null
      country: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      role: $Enums.RoleName | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salons<T extends User$salonsArgs<ExtArgs> = {}>(args?: Subset<T, User$salonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetExpires: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly CVR: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly zipCode: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'RoleName'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.salons
   */
  export type User$salonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    where?: SalonWhereInput
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    cursor?: SalonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Salon
   */

  export type AggregateSalon = {
    _count: SalonCountAggregateOutputType | null
    _avg: SalonAvgAggregateOutputType | null
    _sum: SalonSumAggregateOutputType | null
    _min: SalonMinAggregateOutputType | null
    _max: SalonMaxAggregateOutputType | null
  }

  export type SalonAvgAggregateOutputType = {
    salonId: number | null
    salonTypeId: number | null
  }

  export type SalonSumAggregateOutputType = {
    salonId: number | null
    salonTypeId: number | null
  }

  export type SalonMinAggregateOutputType = {
    salonId: number | null
    salonName: string | null
    userId: string | null
    salonTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    address: string | null
    city: string | null
    zipCode: string | null
    country: string | null
    phone: string | null
  }

  export type SalonMaxAggregateOutputType = {
    salonId: number | null
    salonName: string | null
    userId: string | null
    salonTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    address: string | null
    city: string | null
    zipCode: string | null
    country: string | null
    phone: string | null
  }

  export type SalonCountAggregateOutputType = {
    salonId: number
    salonName: number
    userId: number
    salonTypeId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    address: number
    city: number
    zipCode: number
    country: number
    phone: number
    _all: number
  }


  export type SalonAvgAggregateInputType = {
    salonId?: true
    salonTypeId?: true
  }

  export type SalonSumAggregateInputType = {
    salonId?: true
    salonTypeId?: true
  }

  export type SalonMinAggregateInputType = {
    salonId?: true
    salonName?: true
    userId?: true
    salonTypeId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    address?: true
    city?: true
    zipCode?: true
    country?: true
    phone?: true
  }

  export type SalonMaxAggregateInputType = {
    salonId?: true
    salonName?: true
    userId?: true
    salonTypeId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    address?: true
    city?: true
    zipCode?: true
    country?: true
    phone?: true
  }

  export type SalonCountAggregateInputType = {
    salonId?: true
    salonName?: true
    userId?: true
    salonTypeId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    address?: true
    city?: true
    zipCode?: true
    country?: true
    phone?: true
    _all?: true
  }

  export type SalonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salon to aggregate.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salons
    **/
    _count?: true | SalonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalonMaxAggregateInputType
  }

  export type GetSalonAggregateType<T extends SalonAggregateArgs> = {
        [P in keyof T & keyof AggregateSalon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalon[P]>
      : GetScalarType<T[P], AggregateSalon[P]>
  }




  export type SalonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonWhereInput
    orderBy?: SalonOrderByWithAggregationInput | SalonOrderByWithAggregationInput[]
    by: SalonScalarFieldEnum[] | SalonScalarFieldEnum
    having?: SalonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalonCountAggregateInputType | true
    _avg?: SalonAvgAggregateInputType
    _sum?: SalonSumAggregateInputType
    _min?: SalonMinAggregateInputType
    _max?: SalonMaxAggregateInputType
  }

  export type SalonGroupByOutputType = {
    salonId: number
    salonName: string
    userId: string
    salonTypeId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    address: string | null
    city: string | null
    zipCode: string | null
    country: string | null
    phone: string | null
    _count: SalonCountAggregateOutputType | null
    _avg: SalonAvgAggregateOutputType | null
    _sum: SalonSumAggregateOutputType | null
    _min: SalonMinAggregateOutputType | null
    _max: SalonMaxAggregateOutputType | null
  }

  type GetSalonGroupByPayload<T extends SalonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalonGroupByOutputType[P]>
            : GetScalarType<T[P], SalonGroupByOutputType[P]>
        }
      >
    >


  export type SalonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    salonId?: boolean
    salonName?: boolean
    userId?: boolean
    salonTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    country?: boolean
    phone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    salonType?: boolean | SalonTypeDefaultArgs<ExtArgs>
    services?: boolean | Salon$servicesArgs<ExtArgs>
    images?: boolean | Salon$imagesArgs<ExtArgs>
    deals?: boolean | Salon$dealsArgs<ExtArgs>
    jobs?: boolean | Salon$jobsArgs<ExtArgs>
    _count?: boolean | SalonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salon"]>

  export type SalonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    salonId?: boolean
    salonName?: boolean
    userId?: boolean
    salonTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    country?: boolean
    phone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    salonType?: boolean | SalonTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salon"]>

  export type SalonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    salonId?: boolean
    salonName?: boolean
    userId?: boolean
    salonTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    country?: boolean
    phone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    salonType?: boolean | SalonTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salon"]>

  export type SalonSelectScalar = {
    salonId?: boolean
    salonName?: boolean
    userId?: boolean
    salonTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    country?: boolean
    phone?: boolean
  }

  export type SalonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"salonId" | "salonName" | "userId" | "salonTypeId" | "createdAt" | "updatedAt" | "deletedAt" | "address" | "city" | "zipCode" | "country" | "phone", ExtArgs["result"]["salon"]>
  export type SalonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    salonType?: boolean | SalonTypeDefaultArgs<ExtArgs>
    services?: boolean | Salon$servicesArgs<ExtArgs>
    images?: boolean | Salon$imagesArgs<ExtArgs>
    deals?: boolean | Salon$dealsArgs<ExtArgs>
    jobs?: boolean | Salon$jobsArgs<ExtArgs>
    _count?: boolean | SalonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    salonType?: boolean | SalonTypeDefaultArgs<ExtArgs>
  }
  export type SalonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    salonType?: boolean | SalonTypeDefaultArgs<ExtArgs>
  }

  export type $SalonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Salon"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      salonType: Prisma.$SalonTypePayload<ExtArgs>
      services: Prisma.$SalonServicePayload<ExtArgs>[]
      images: Prisma.$SalonImagePayload<ExtArgs>[]
      deals: Prisma.$DealPayload<ExtArgs>[]
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      salonId: number
      salonName: string
      userId: string
      salonTypeId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      address: string | null
      city: string | null
      zipCode: string | null
      country: string | null
      phone: string | null
    }, ExtArgs["result"]["salon"]>
    composites: {}
  }

  type SalonGetPayload<S extends boolean | null | undefined | SalonDefaultArgs> = $Result.GetResult<Prisma.$SalonPayload, S>

  type SalonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalonCountAggregateInputType | true
    }

  export interface SalonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Salon'], meta: { name: 'Salon' } }
    /**
     * Find zero or one Salon that matches the filter.
     * @param {SalonFindUniqueArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalonFindUniqueArgs>(args: SelectSubset<T, SalonFindUniqueArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalonFindUniqueOrThrowArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalonFindUniqueOrThrowArgs>(args: SelectSubset<T, SalonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindFirstArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalonFindFirstArgs>(args?: SelectSubset<T, SalonFindFirstArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindFirstOrThrowArgs} args - Arguments to find a Salon
     * @example
     * // Get one Salon
     * const salon = await prisma.salon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalonFindFirstOrThrowArgs>(args?: SelectSubset<T, SalonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salons
     * const salons = await prisma.salon.findMany()
     * 
     * // Get first 10 Salons
     * const salons = await prisma.salon.findMany({ take: 10 })
     * 
     * // Only select the `salonId`
     * const salonWithSalonIdOnly = await prisma.salon.findMany({ select: { salonId: true } })
     * 
     */
    findMany<T extends SalonFindManyArgs>(args?: SelectSubset<T, SalonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salon.
     * @param {SalonCreateArgs} args - Arguments to create a Salon.
     * @example
     * // Create one Salon
     * const Salon = await prisma.salon.create({
     *   data: {
     *     // ... data to create a Salon
     *   }
     * })
     * 
     */
    create<T extends SalonCreateArgs>(args: SelectSubset<T, SalonCreateArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salons.
     * @param {SalonCreateManyArgs} args - Arguments to create many Salons.
     * @example
     * // Create many Salons
     * const salon = await prisma.salon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalonCreateManyArgs>(args?: SelectSubset<T, SalonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salons and returns the data saved in the database.
     * @param {SalonCreateManyAndReturnArgs} args - Arguments to create many Salons.
     * @example
     * // Create many Salons
     * const salon = await prisma.salon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salons and only return the `salonId`
     * const salonWithSalonIdOnly = await prisma.salon.createManyAndReturn({
     *   select: { salonId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalonCreateManyAndReturnArgs>(args?: SelectSubset<T, SalonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Salon.
     * @param {SalonDeleteArgs} args - Arguments to delete one Salon.
     * @example
     * // Delete one Salon
     * const Salon = await prisma.salon.delete({
     *   where: {
     *     // ... filter to delete one Salon
     *   }
     * })
     * 
     */
    delete<T extends SalonDeleteArgs>(args: SelectSubset<T, SalonDeleteArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salon.
     * @param {SalonUpdateArgs} args - Arguments to update one Salon.
     * @example
     * // Update one Salon
     * const salon = await prisma.salon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalonUpdateArgs>(args: SelectSubset<T, SalonUpdateArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salons.
     * @param {SalonDeleteManyArgs} args - Arguments to filter Salons to delete.
     * @example
     * // Delete a few Salons
     * const { count } = await prisma.salon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalonDeleteManyArgs>(args?: SelectSubset<T, SalonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salons
     * const salon = await prisma.salon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalonUpdateManyArgs>(args: SelectSubset<T, SalonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salons and returns the data updated in the database.
     * @param {SalonUpdateManyAndReturnArgs} args - Arguments to update many Salons.
     * @example
     * // Update many Salons
     * const salon = await prisma.salon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salons and only return the `salonId`
     * const salonWithSalonIdOnly = await prisma.salon.updateManyAndReturn({
     *   select: { salonId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalonUpdateManyAndReturnArgs>(args: SelectSubset<T, SalonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Salon.
     * @param {SalonUpsertArgs} args - Arguments to update or create a Salon.
     * @example
     * // Update or create a Salon
     * const salon = await prisma.salon.upsert({
     *   create: {
     *     // ... data to create a Salon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salon we want to update
     *   }
     * })
     */
    upsert<T extends SalonUpsertArgs>(args: SelectSubset<T, SalonUpsertArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonCountArgs} args - Arguments to filter Salons to count.
     * @example
     * // Count the number of Salons
     * const count = await prisma.salon.count({
     *   where: {
     *     // ... the filter for the Salons we want to count
     *   }
     * })
    **/
    count<T extends SalonCountArgs>(
      args?: Subset<T, SalonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalonAggregateArgs>(args: Subset<T, SalonAggregateArgs>): Prisma.PrismaPromise<GetSalonAggregateType<T>>

    /**
     * Group by Salon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalonGroupByArgs['orderBy'] }
        : { orderBy?: SalonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Salon model
   */
  readonly fields: SalonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Salon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    salonType<T extends SalonTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonTypeDefaultArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends Salon$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Salon$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Salon$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Salon$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deals<T extends Salon$dealsArgs<ExtArgs> = {}>(args?: Subset<T, Salon$dealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobs<T extends Salon$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Salon$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Salon model
   */
  interface SalonFieldRefs {
    readonly salonId: FieldRef<"Salon", 'Int'>
    readonly salonName: FieldRef<"Salon", 'String'>
    readonly userId: FieldRef<"Salon", 'String'>
    readonly salonTypeId: FieldRef<"Salon", 'Int'>
    readonly createdAt: FieldRef<"Salon", 'DateTime'>
    readonly updatedAt: FieldRef<"Salon", 'DateTime'>
    readonly deletedAt: FieldRef<"Salon", 'DateTime'>
    readonly address: FieldRef<"Salon", 'String'>
    readonly city: FieldRef<"Salon", 'String'>
    readonly zipCode: FieldRef<"Salon", 'String'>
    readonly country: FieldRef<"Salon", 'String'>
    readonly phone: FieldRef<"Salon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Salon findUnique
   */
  export type SalonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon findUniqueOrThrow
   */
  export type SalonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon findFirst
   */
  export type SalonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salons.
     */
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon findFirstOrThrow
   */
  export type SalonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salon to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salons.
     */
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon findMany
   */
  export type SalonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter, which Salons to fetch.
     */
    where?: SalonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salons to fetch.
     */
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salons.
     */
    cursor?: SalonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salons.
     */
    skip?: number
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * Salon create
   */
  export type SalonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The data needed to create a Salon.
     */
    data: XOR<SalonCreateInput, SalonUncheckedCreateInput>
  }

  /**
   * Salon createMany
   */
  export type SalonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salons.
     */
    data: SalonCreateManyInput | SalonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Salon createManyAndReturn
   */
  export type SalonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * The data used to create many Salons.
     */
    data: SalonCreateManyInput | SalonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Salon update
   */
  export type SalonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The data needed to update a Salon.
     */
    data: XOR<SalonUpdateInput, SalonUncheckedUpdateInput>
    /**
     * Choose, which Salon to update.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon updateMany
   */
  export type SalonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salons.
     */
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyInput>
    /**
     * Filter which Salons to update
     */
    where?: SalonWhereInput
    /**
     * Limit how many Salons to update.
     */
    limit?: number
  }

  /**
   * Salon updateManyAndReturn
   */
  export type SalonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * The data used to update Salons.
     */
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyInput>
    /**
     * Filter which Salons to update
     */
    where?: SalonWhereInput
    /**
     * Limit how many Salons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Salon upsert
   */
  export type SalonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * The filter to search for the Salon to update in case it exists.
     */
    where: SalonWhereUniqueInput
    /**
     * In case the Salon found by the `where` argument doesn't exist, create a new Salon with this data.
     */
    create: XOR<SalonCreateInput, SalonUncheckedCreateInput>
    /**
     * In case the Salon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalonUpdateInput, SalonUncheckedUpdateInput>
  }

  /**
   * Salon delete
   */
  export type SalonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    /**
     * Filter which Salon to delete.
     */
    where: SalonWhereUniqueInput
  }

  /**
   * Salon deleteMany
   */
  export type SalonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salons to delete
     */
    where?: SalonWhereInput
    /**
     * Limit how many Salons to delete.
     */
    limit?: number
  }

  /**
   * Salon.services
   */
  export type Salon$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    where?: SalonServiceWhereInput
    orderBy?: SalonServiceOrderByWithRelationInput | SalonServiceOrderByWithRelationInput[]
    cursor?: SalonServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalonServiceScalarFieldEnum | SalonServiceScalarFieldEnum[]
  }

  /**
   * Salon.images
   */
  export type Salon$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    where?: SalonImageWhereInput
    orderBy?: SalonImageOrderByWithRelationInput | SalonImageOrderByWithRelationInput[]
    cursor?: SalonImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalonImageScalarFieldEnum | SalonImageScalarFieldEnum[]
  }

  /**
   * Salon.deals
   */
  export type Salon$dealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    where?: DealWhereInput
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    cursor?: DealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Salon.jobs
   */
  export type Salon$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Salon without action
   */
  export type SalonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
  }


  /**
   * Model SalonType
   */

  export type AggregateSalonType = {
    _count: SalonTypeCountAggregateOutputType | null
    _avg: SalonTypeAvgAggregateOutputType | null
    _sum: SalonTypeSumAggregateOutputType | null
    _min: SalonTypeMinAggregateOutputType | null
    _max: SalonTypeMaxAggregateOutputType | null
  }

  export type SalonTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type SalonTypeSumAggregateOutputType = {
    id: number | null
  }

  export type SalonTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SalonTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SalonTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SalonTypeAvgAggregateInputType = {
    id?: true
  }

  export type SalonTypeSumAggregateInputType = {
    id?: true
  }

  export type SalonTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SalonTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SalonTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SalonTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalonType to aggregate.
     */
    where?: SalonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonTypes to fetch.
     */
    orderBy?: SalonTypeOrderByWithRelationInput | SalonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalonTypes
    **/
    _count?: true | SalonTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalonTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalonTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalonTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalonTypeMaxAggregateInputType
  }

  export type GetSalonTypeAggregateType<T extends SalonTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSalonType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalonType[P]>
      : GetScalarType<T[P], AggregateSalonType[P]>
  }




  export type SalonTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonTypeWhereInput
    orderBy?: SalonTypeOrderByWithAggregationInput | SalonTypeOrderByWithAggregationInput[]
    by: SalonTypeScalarFieldEnum[] | SalonTypeScalarFieldEnum
    having?: SalonTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalonTypeCountAggregateInputType | true
    _avg?: SalonTypeAvgAggregateInputType
    _sum?: SalonTypeSumAggregateInputType
    _min?: SalonTypeMinAggregateInputType
    _max?: SalonTypeMaxAggregateInputType
  }

  export type SalonTypeGroupByOutputType = {
    id: number
    name: string
    _count: SalonTypeCountAggregateOutputType | null
    _avg: SalonTypeAvgAggregateOutputType | null
    _sum: SalonTypeSumAggregateOutputType | null
    _min: SalonTypeMinAggregateOutputType | null
    _max: SalonTypeMaxAggregateOutputType | null
  }

  type GetSalonTypeGroupByPayload<T extends SalonTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalonTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalonTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalonTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SalonTypeGroupByOutputType[P]>
        }
      >
    >


  export type SalonTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    salons?: boolean | SalonType$salonsArgs<ExtArgs>
    _count?: boolean | SalonTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonType"]>

  export type SalonTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["salonType"]>

  export type SalonTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["salonType"]>

  export type SalonTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SalonTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["salonType"]>
  export type SalonTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salons?: boolean | SalonType$salonsArgs<ExtArgs>
    _count?: boolean | SalonTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalonTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalonTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalonTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalonType"
    objects: {
      salons: Prisma.$SalonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["salonType"]>
    composites: {}
  }

  type SalonTypeGetPayload<S extends boolean | null | undefined | SalonTypeDefaultArgs> = $Result.GetResult<Prisma.$SalonTypePayload, S>

  type SalonTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalonTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalonTypeCountAggregateInputType | true
    }

  export interface SalonTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalonType'], meta: { name: 'SalonType' } }
    /**
     * Find zero or one SalonType that matches the filter.
     * @param {SalonTypeFindUniqueArgs} args - Arguments to find a SalonType
     * @example
     * // Get one SalonType
     * const salonType = await prisma.salonType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalonTypeFindUniqueArgs>(args: SelectSubset<T, SalonTypeFindUniqueArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalonType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalonTypeFindUniqueOrThrowArgs} args - Arguments to find a SalonType
     * @example
     * // Get one SalonType
     * const salonType = await prisma.salonType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalonTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, SalonTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalonType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonTypeFindFirstArgs} args - Arguments to find a SalonType
     * @example
     * // Get one SalonType
     * const salonType = await prisma.salonType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalonTypeFindFirstArgs>(args?: SelectSubset<T, SalonTypeFindFirstArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalonType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonTypeFindFirstOrThrowArgs} args - Arguments to find a SalonType
     * @example
     * // Get one SalonType
     * const salonType = await prisma.salonType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalonTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, SalonTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalonTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalonTypes
     * const salonTypes = await prisma.salonType.findMany()
     * 
     * // Get first 10 SalonTypes
     * const salonTypes = await prisma.salonType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salonTypeWithIdOnly = await prisma.salonType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalonTypeFindManyArgs>(args?: SelectSubset<T, SalonTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalonType.
     * @param {SalonTypeCreateArgs} args - Arguments to create a SalonType.
     * @example
     * // Create one SalonType
     * const SalonType = await prisma.salonType.create({
     *   data: {
     *     // ... data to create a SalonType
     *   }
     * })
     * 
     */
    create<T extends SalonTypeCreateArgs>(args: SelectSubset<T, SalonTypeCreateArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalonTypes.
     * @param {SalonTypeCreateManyArgs} args - Arguments to create many SalonTypes.
     * @example
     * // Create many SalonTypes
     * const salonType = await prisma.salonType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalonTypeCreateManyArgs>(args?: SelectSubset<T, SalonTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalonTypes and returns the data saved in the database.
     * @param {SalonTypeCreateManyAndReturnArgs} args - Arguments to create many SalonTypes.
     * @example
     * // Create many SalonTypes
     * const salonType = await prisma.salonType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalonTypes and only return the `id`
     * const salonTypeWithIdOnly = await prisma.salonType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalonTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, SalonTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalonType.
     * @param {SalonTypeDeleteArgs} args - Arguments to delete one SalonType.
     * @example
     * // Delete one SalonType
     * const SalonType = await prisma.salonType.delete({
     *   where: {
     *     // ... filter to delete one SalonType
     *   }
     * })
     * 
     */
    delete<T extends SalonTypeDeleteArgs>(args: SelectSubset<T, SalonTypeDeleteArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalonType.
     * @param {SalonTypeUpdateArgs} args - Arguments to update one SalonType.
     * @example
     * // Update one SalonType
     * const salonType = await prisma.salonType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalonTypeUpdateArgs>(args: SelectSubset<T, SalonTypeUpdateArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalonTypes.
     * @param {SalonTypeDeleteManyArgs} args - Arguments to filter SalonTypes to delete.
     * @example
     * // Delete a few SalonTypes
     * const { count } = await prisma.salonType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalonTypeDeleteManyArgs>(args?: SelectSubset<T, SalonTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalonTypes
     * const salonType = await prisma.salonType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalonTypeUpdateManyArgs>(args: SelectSubset<T, SalonTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalonTypes and returns the data updated in the database.
     * @param {SalonTypeUpdateManyAndReturnArgs} args - Arguments to update many SalonTypes.
     * @example
     * // Update many SalonTypes
     * const salonType = await prisma.salonType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalonTypes and only return the `id`
     * const salonTypeWithIdOnly = await prisma.salonType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalonTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, SalonTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalonType.
     * @param {SalonTypeUpsertArgs} args - Arguments to update or create a SalonType.
     * @example
     * // Update or create a SalonType
     * const salonType = await prisma.salonType.upsert({
     *   create: {
     *     // ... data to create a SalonType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalonType we want to update
     *   }
     * })
     */
    upsert<T extends SalonTypeUpsertArgs>(args: SelectSubset<T, SalonTypeUpsertArgs<ExtArgs>>): Prisma__SalonTypeClient<$Result.GetResult<Prisma.$SalonTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalonTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonTypeCountArgs} args - Arguments to filter SalonTypes to count.
     * @example
     * // Count the number of SalonTypes
     * const count = await prisma.salonType.count({
     *   where: {
     *     // ... the filter for the SalonTypes we want to count
     *   }
     * })
    **/
    count<T extends SalonTypeCountArgs>(
      args?: Subset<T, SalonTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalonTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalonTypeAggregateArgs>(args: Subset<T, SalonTypeAggregateArgs>): Prisma.PrismaPromise<GetSalonTypeAggregateType<T>>

    /**
     * Group by SalonType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalonTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalonTypeGroupByArgs['orderBy'] }
        : { orderBy?: SalonTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalonTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalonTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalonType model
   */
  readonly fields: SalonTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalonType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalonTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salons<T extends SalonType$salonsArgs<ExtArgs> = {}>(args?: Subset<T, SalonType$salonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalonType model
   */
  interface SalonTypeFieldRefs {
    readonly id: FieldRef<"SalonType", 'Int'>
    readonly name: FieldRef<"SalonType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SalonType findUnique
   */
  export type SalonTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * Filter, which SalonType to fetch.
     */
    where: SalonTypeWhereUniqueInput
  }

  /**
   * SalonType findUniqueOrThrow
   */
  export type SalonTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * Filter, which SalonType to fetch.
     */
    where: SalonTypeWhereUniqueInput
  }

  /**
   * SalonType findFirst
   */
  export type SalonTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * Filter, which SalonType to fetch.
     */
    where?: SalonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonTypes to fetch.
     */
    orderBy?: SalonTypeOrderByWithRelationInput | SalonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalonTypes.
     */
    cursor?: SalonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalonTypes.
     */
    distinct?: SalonTypeScalarFieldEnum | SalonTypeScalarFieldEnum[]
  }

  /**
   * SalonType findFirstOrThrow
   */
  export type SalonTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * Filter, which SalonType to fetch.
     */
    where?: SalonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonTypes to fetch.
     */
    orderBy?: SalonTypeOrderByWithRelationInput | SalonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalonTypes.
     */
    cursor?: SalonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalonTypes.
     */
    distinct?: SalonTypeScalarFieldEnum | SalonTypeScalarFieldEnum[]
  }

  /**
   * SalonType findMany
   */
  export type SalonTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * Filter, which SalonTypes to fetch.
     */
    where?: SalonTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonTypes to fetch.
     */
    orderBy?: SalonTypeOrderByWithRelationInput | SalonTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalonTypes.
     */
    cursor?: SalonTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonTypes.
     */
    skip?: number
    distinct?: SalonTypeScalarFieldEnum | SalonTypeScalarFieldEnum[]
  }

  /**
   * SalonType create
   */
  export type SalonTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SalonType.
     */
    data: XOR<SalonTypeCreateInput, SalonTypeUncheckedCreateInput>
  }

  /**
   * SalonType createMany
   */
  export type SalonTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalonTypes.
     */
    data: SalonTypeCreateManyInput | SalonTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalonType createManyAndReturn
   */
  export type SalonTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * The data used to create many SalonTypes.
     */
    data: SalonTypeCreateManyInput | SalonTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalonType update
   */
  export type SalonTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SalonType.
     */
    data: XOR<SalonTypeUpdateInput, SalonTypeUncheckedUpdateInput>
    /**
     * Choose, which SalonType to update.
     */
    where: SalonTypeWhereUniqueInput
  }

  /**
   * SalonType updateMany
   */
  export type SalonTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalonTypes.
     */
    data: XOR<SalonTypeUpdateManyMutationInput, SalonTypeUncheckedUpdateManyInput>
    /**
     * Filter which SalonTypes to update
     */
    where?: SalonTypeWhereInput
    /**
     * Limit how many SalonTypes to update.
     */
    limit?: number
  }

  /**
   * SalonType updateManyAndReturn
   */
  export type SalonTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * The data used to update SalonTypes.
     */
    data: XOR<SalonTypeUpdateManyMutationInput, SalonTypeUncheckedUpdateManyInput>
    /**
     * Filter which SalonTypes to update
     */
    where?: SalonTypeWhereInput
    /**
     * Limit how many SalonTypes to update.
     */
    limit?: number
  }

  /**
   * SalonType upsert
   */
  export type SalonTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SalonType to update in case it exists.
     */
    where: SalonTypeWhereUniqueInput
    /**
     * In case the SalonType found by the `where` argument doesn't exist, create a new SalonType with this data.
     */
    create: XOR<SalonTypeCreateInput, SalonTypeUncheckedCreateInput>
    /**
     * In case the SalonType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalonTypeUpdateInput, SalonTypeUncheckedUpdateInput>
  }

  /**
   * SalonType delete
   */
  export type SalonTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
    /**
     * Filter which SalonType to delete.
     */
    where: SalonTypeWhereUniqueInput
  }

  /**
   * SalonType deleteMany
   */
  export type SalonTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalonTypes to delete
     */
    where?: SalonTypeWhereInput
    /**
     * Limit how many SalonTypes to delete.
     */
    limit?: number
  }

  /**
   * SalonType.salons
   */
  export type SalonType$salonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salon
     */
    select?: SalonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salon
     */
    omit?: SalonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonInclude<ExtArgs> | null
    where?: SalonWhereInput
    orderBy?: SalonOrderByWithRelationInput | SalonOrderByWithRelationInput[]
    cursor?: SalonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalonScalarFieldEnum | SalonScalarFieldEnum[]
  }

  /**
   * SalonType without action
   */
  export type SalonTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonType
     */
    select?: SalonTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonType
     */
    omit?: SalonTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonTypeInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    category: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    category: string
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    salons?: boolean | Service$salonsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salons?: boolean | Service$salonsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      salons: Prisma.$SalonServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salons<T extends Service$salonsArgs<ExtArgs> = {}>(args?: Subset<T, Service$salonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly category: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.salons
   */
  export type Service$salonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    where?: SalonServiceWhereInput
    orderBy?: SalonServiceOrderByWithRelationInput | SalonServiceOrderByWithRelationInput[]
    cursor?: SalonServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalonServiceScalarFieldEnum | SalonServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model SalonService
   */

  export type AggregateSalonService = {
    _count: SalonServiceCountAggregateOutputType | null
    _avg: SalonServiceAvgAggregateOutputType | null
    _sum: SalonServiceSumAggregateOutputType | null
    _min: SalonServiceMinAggregateOutputType | null
    _max: SalonServiceMaxAggregateOutputType | null
  }

  export type SalonServiceAvgAggregateOutputType = {
    id: number | null
    salonId: number | null
    serviceId: number | null
  }

  export type SalonServiceSumAggregateOutputType = {
    id: number | null
    salonId: number | null
    serviceId: number | null
  }

  export type SalonServiceMinAggregateOutputType = {
    id: number | null
    salonId: number | null
    serviceId: number | null
  }

  export type SalonServiceMaxAggregateOutputType = {
    id: number | null
    salonId: number | null
    serviceId: number | null
  }

  export type SalonServiceCountAggregateOutputType = {
    id: number
    salonId: number
    serviceId: number
    _all: number
  }


  export type SalonServiceAvgAggregateInputType = {
    id?: true
    salonId?: true
    serviceId?: true
  }

  export type SalonServiceSumAggregateInputType = {
    id?: true
    salonId?: true
    serviceId?: true
  }

  export type SalonServiceMinAggregateInputType = {
    id?: true
    salonId?: true
    serviceId?: true
  }

  export type SalonServiceMaxAggregateInputType = {
    id?: true
    salonId?: true
    serviceId?: true
  }

  export type SalonServiceCountAggregateInputType = {
    id?: true
    salonId?: true
    serviceId?: true
    _all?: true
  }

  export type SalonServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalonService to aggregate.
     */
    where?: SalonServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonServices to fetch.
     */
    orderBy?: SalonServiceOrderByWithRelationInput | SalonServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalonServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalonServices
    **/
    _count?: true | SalonServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalonServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalonServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalonServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalonServiceMaxAggregateInputType
  }

  export type GetSalonServiceAggregateType<T extends SalonServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateSalonService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalonService[P]>
      : GetScalarType<T[P], AggregateSalonService[P]>
  }




  export type SalonServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonServiceWhereInput
    orderBy?: SalonServiceOrderByWithAggregationInput | SalonServiceOrderByWithAggregationInput[]
    by: SalonServiceScalarFieldEnum[] | SalonServiceScalarFieldEnum
    having?: SalonServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalonServiceCountAggregateInputType | true
    _avg?: SalonServiceAvgAggregateInputType
    _sum?: SalonServiceSumAggregateInputType
    _min?: SalonServiceMinAggregateInputType
    _max?: SalonServiceMaxAggregateInputType
  }

  export type SalonServiceGroupByOutputType = {
    id: number
    salonId: number
    serviceId: number
    _count: SalonServiceCountAggregateOutputType | null
    _avg: SalonServiceAvgAggregateOutputType | null
    _sum: SalonServiceSumAggregateOutputType | null
    _min: SalonServiceMinAggregateOutputType | null
    _max: SalonServiceMaxAggregateOutputType | null
  }

  type GetSalonServiceGroupByPayload<T extends SalonServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalonServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalonServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalonServiceGroupByOutputType[P]>
            : GetScalarType<T[P], SalonServiceGroupByOutputType[P]>
        }
      >
    >


  export type SalonServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    serviceId?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonService"]>

  export type SalonServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    serviceId?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonService"]>

  export type SalonServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    serviceId?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonService"]>

  export type SalonServiceSelectScalar = {
    id?: boolean
    salonId?: boolean
    serviceId?: boolean
  }

  export type SalonServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salonId" | "serviceId", ExtArgs["result"]["salonService"]>
  export type SalonServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type SalonServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type SalonServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $SalonServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalonService"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      salonId: number
      serviceId: number
    }, ExtArgs["result"]["salonService"]>
    composites: {}
  }

  type SalonServiceGetPayload<S extends boolean | null | undefined | SalonServiceDefaultArgs> = $Result.GetResult<Prisma.$SalonServicePayload, S>

  type SalonServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalonServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalonServiceCountAggregateInputType | true
    }

  export interface SalonServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalonService'], meta: { name: 'SalonService' } }
    /**
     * Find zero or one SalonService that matches the filter.
     * @param {SalonServiceFindUniqueArgs} args - Arguments to find a SalonService
     * @example
     * // Get one SalonService
     * const salonService = await prisma.salonService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalonServiceFindUniqueArgs>(args: SelectSubset<T, SalonServiceFindUniqueArgs<ExtArgs>>): Prisma__SalonServiceClient<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalonService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalonServiceFindUniqueOrThrowArgs} args - Arguments to find a SalonService
     * @example
     * // Get one SalonService
     * const salonService = await prisma.salonService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalonServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, SalonServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalonServiceClient<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalonService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonServiceFindFirstArgs} args - Arguments to find a SalonService
     * @example
     * // Get one SalonService
     * const salonService = await prisma.salonService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalonServiceFindFirstArgs>(args?: SelectSubset<T, SalonServiceFindFirstArgs<ExtArgs>>): Prisma__SalonServiceClient<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalonService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonServiceFindFirstOrThrowArgs} args - Arguments to find a SalonService
     * @example
     * // Get one SalonService
     * const salonService = await prisma.salonService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalonServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, SalonServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalonServiceClient<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalonServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalonServices
     * const salonServices = await prisma.salonService.findMany()
     * 
     * // Get first 10 SalonServices
     * const salonServices = await prisma.salonService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salonServiceWithIdOnly = await prisma.salonService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalonServiceFindManyArgs>(args?: SelectSubset<T, SalonServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalonService.
     * @param {SalonServiceCreateArgs} args - Arguments to create a SalonService.
     * @example
     * // Create one SalonService
     * const SalonService = await prisma.salonService.create({
     *   data: {
     *     // ... data to create a SalonService
     *   }
     * })
     * 
     */
    create<T extends SalonServiceCreateArgs>(args: SelectSubset<T, SalonServiceCreateArgs<ExtArgs>>): Prisma__SalonServiceClient<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalonServices.
     * @param {SalonServiceCreateManyArgs} args - Arguments to create many SalonServices.
     * @example
     * // Create many SalonServices
     * const salonService = await prisma.salonService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalonServiceCreateManyArgs>(args?: SelectSubset<T, SalonServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalonServices and returns the data saved in the database.
     * @param {SalonServiceCreateManyAndReturnArgs} args - Arguments to create many SalonServices.
     * @example
     * // Create many SalonServices
     * const salonService = await prisma.salonService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalonServices and only return the `id`
     * const salonServiceWithIdOnly = await prisma.salonService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalonServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, SalonServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalonService.
     * @param {SalonServiceDeleteArgs} args - Arguments to delete one SalonService.
     * @example
     * // Delete one SalonService
     * const SalonService = await prisma.salonService.delete({
     *   where: {
     *     // ... filter to delete one SalonService
     *   }
     * })
     * 
     */
    delete<T extends SalonServiceDeleteArgs>(args: SelectSubset<T, SalonServiceDeleteArgs<ExtArgs>>): Prisma__SalonServiceClient<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalonService.
     * @param {SalonServiceUpdateArgs} args - Arguments to update one SalonService.
     * @example
     * // Update one SalonService
     * const salonService = await prisma.salonService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalonServiceUpdateArgs>(args: SelectSubset<T, SalonServiceUpdateArgs<ExtArgs>>): Prisma__SalonServiceClient<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalonServices.
     * @param {SalonServiceDeleteManyArgs} args - Arguments to filter SalonServices to delete.
     * @example
     * // Delete a few SalonServices
     * const { count } = await prisma.salonService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalonServiceDeleteManyArgs>(args?: SelectSubset<T, SalonServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalonServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalonServices
     * const salonService = await prisma.salonService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalonServiceUpdateManyArgs>(args: SelectSubset<T, SalonServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalonServices and returns the data updated in the database.
     * @param {SalonServiceUpdateManyAndReturnArgs} args - Arguments to update many SalonServices.
     * @example
     * // Update many SalonServices
     * const salonService = await prisma.salonService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalonServices and only return the `id`
     * const salonServiceWithIdOnly = await prisma.salonService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalonServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, SalonServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalonService.
     * @param {SalonServiceUpsertArgs} args - Arguments to update or create a SalonService.
     * @example
     * // Update or create a SalonService
     * const salonService = await prisma.salonService.upsert({
     *   create: {
     *     // ... data to create a SalonService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalonService we want to update
     *   }
     * })
     */
    upsert<T extends SalonServiceUpsertArgs>(args: SelectSubset<T, SalonServiceUpsertArgs<ExtArgs>>): Prisma__SalonServiceClient<$Result.GetResult<Prisma.$SalonServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalonServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonServiceCountArgs} args - Arguments to filter SalonServices to count.
     * @example
     * // Count the number of SalonServices
     * const count = await prisma.salonService.count({
     *   where: {
     *     // ... the filter for the SalonServices we want to count
     *   }
     * })
    **/
    count<T extends SalonServiceCountArgs>(
      args?: Subset<T, SalonServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalonServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalonService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalonServiceAggregateArgs>(args: Subset<T, SalonServiceAggregateArgs>): Prisma.PrismaPromise<GetSalonServiceAggregateType<T>>

    /**
     * Group by SalonService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalonServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalonServiceGroupByArgs['orderBy'] }
        : { orderBy?: SalonServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalonServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalonServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalonService model
   */
  readonly fields: SalonServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalonService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalonServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalonService model
   */
  interface SalonServiceFieldRefs {
    readonly id: FieldRef<"SalonService", 'Int'>
    readonly salonId: FieldRef<"SalonService", 'Int'>
    readonly serviceId: FieldRef<"SalonService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SalonService findUnique
   */
  export type SalonServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * Filter, which SalonService to fetch.
     */
    where: SalonServiceWhereUniqueInput
  }

  /**
   * SalonService findUniqueOrThrow
   */
  export type SalonServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * Filter, which SalonService to fetch.
     */
    where: SalonServiceWhereUniqueInput
  }

  /**
   * SalonService findFirst
   */
  export type SalonServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * Filter, which SalonService to fetch.
     */
    where?: SalonServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonServices to fetch.
     */
    orderBy?: SalonServiceOrderByWithRelationInput | SalonServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalonServices.
     */
    cursor?: SalonServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalonServices.
     */
    distinct?: SalonServiceScalarFieldEnum | SalonServiceScalarFieldEnum[]
  }

  /**
   * SalonService findFirstOrThrow
   */
  export type SalonServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * Filter, which SalonService to fetch.
     */
    where?: SalonServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonServices to fetch.
     */
    orderBy?: SalonServiceOrderByWithRelationInput | SalonServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalonServices.
     */
    cursor?: SalonServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalonServices.
     */
    distinct?: SalonServiceScalarFieldEnum | SalonServiceScalarFieldEnum[]
  }

  /**
   * SalonService findMany
   */
  export type SalonServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * Filter, which SalonServices to fetch.
     */
    where?: SalonServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonServices to fetch.
     */
    orderBy?: SalonServiceOrderByWithRelationInput | SalonServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalonServices.
     */
    cursor?: SalonServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonServices.
     */
    skip?: number
    distinct?: SalonServiceScalarFieldEnum | SalonServiceScalarFieldEnum[]
  }

  /**
   * SalonService create
   */
  export type SalonServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a SalonService.
     */
    data: XOR<SalonServiceCreateInput, SalonServiceUncheckedCreateInput>
  }

  /**
   * SalonService createMany
   */
  export type SalonServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalonServices.
     */
    data: SalonServiceCreateManyInput | SalonServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalonService createManyAndReturn
   */
  export type SalonServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * The data used to create many SalonServices.
     */
    data: SalonServiceCreateManyInput | SalonServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalonService update
   */
  export type SalonServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a SalonService.
     */
    data: XOR<SalonServiceUpdateInput, SalonServiceUncheckedUpdateInput>
    /**
     * Choose, which SalonService to update.
     */
    where: SalonServiceWhereUniqueInput
  }

  /**
   * SalonService updateMany
   */
  export type SalonServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalonServices.
     */
    data: XOR<SalonServiceUpdateManyMutationInput, SalonServiceUncheckedUpdateManyInput>
    /**
     * Filter which SalonServices to update
     */
    where?: SalonServiceWhereInput
    /**
     * Limit how many SalonServices to update.
     */
    limit?: number
  }

  /**
   * SalonService updateManyAndReturn
   */
  export type SalonServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * The data used to update SalonServices.
     */
    data: XOR<SalonServiceUpdateManyMutationInput, SalonServiceUncheckedUpdateManyInput>
    /**
     * Filter which SalonServices to update
     */
    where?: SalonServiceWhereInput
    /**
     * Limit how many SalonServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalonService upsert
   */
  export type SalonServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the SalonService to update in case it exists.
     */
    where: SalonServiceWhereUniqueInput
    /**
     * In case the SalonService found by the `where` argument doesn't exist, create a new SalonService with this data.
     */
    create: XOR<SalonServiceCreateInput, SalonServiceUncheckedCreateInput>
    /**
     * In case the SalonService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalonServiceUpdateInput, SalonServiceUncheckedUpdateInput>
  }

  /**
   * SalonService delete
   */
  export type SalonServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
    /**
     * Filter which SalonService to delete.
     */
    where: SalonServiceWhereUniqueInput
  }

  /**
   * SalonService deleteMany
   */
  export type SalonServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalonServices to delete
     */
    where?: SalonServiceWhereInput
    /**
     * Limit how many SalonServices to delete.
     */
    limit?: number
  }

  /**
   * SalonService without action
   */
  export type SalonServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonService
     */
    select?: SalonServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonService
     */
    omit?: SalonServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonServiceInclude<ExtArgs> | null
  }


  /**
   * Model Deal
   */

  export type AggregateDeal = {
    _count: DealCountAggregateOutputType | null
    _avg: DealAvgAggregateOutputType | null
    _sum: DealSumAggregateOutputType | null
    _min: DealMinAggregateOutputType | null
    _max: DealMaxAggregateOutputType | null
  }

  export type DealAvgAggregateOutputType = {
    id: number | null
    originalPrice: Decimal | null
    price: Decimal | null
    quantity: number | null
    salonId: number | null
    durationMinutes: number | null
  }

  export type DealSumAggregateOutputType = {
    id: number | null
    originalPrice: Decimal | null
    price: Decimal | null
    quantity: number | null
    salonId: number | null
    durationMinutes: number | null
  }

  export type DealMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    originalPrice: Decimal | null
    price: Decimal | null
    quantity: number | null
    startDate: Date | null
    expiryDate: Date | null
    salonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    durationMinutes: number | null
    imageUrl: string | null
  }

  export type DealMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    originalPrice: Decimal | null
    price: Decimal | null
    quantity: number | null
    startDate: Date | null
    expiryDate: Date | null
    salonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    durationMinutes: number | null
    imageUrl: string | null
  }

  export type DealCountAggregateOutputType = {
    id: number
    title: number
    description: number
    originalPrice: number
    price: number
    quantity: number
    startDate: number
    expiryDate: number
    salonId: number
    createdAt: number
    updatedAt: number
    durationMinutes: number
    imageUrl: number
    _all: number
  }


  export type DealAvgAggregateInputType = {
    id?: true
    originalPrice?: true
    price?: true
    quantity?: true
    salonId?: true
    durationMinutes?: true
  }

  export type DealSumAggregateInputType = {
    id?: true
    originalPrice?: true
    price?: true
    quantity?: true
    salonId?: true
    durationMinutes?: true
  }

  export type DealMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    originalPrice?: true
    price?: true
    quantity?: true
    startDate?: true
    expiryDate?: true
    salonId?: true
    createdAt?: true
    updatedAt?: true
    durationMinutes?: true
    imageUrl?: true
  }

  export type DealMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    originalPrice?: true
    price?: true
    quantity?: true
    startDate?: true
    expiryDate?: true
    salonId?: true
    createdAt?: true
    updatedAt?: true
    durationMinutes?: true
    imageUrl?: true
  }

  export type DealCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    originalPrice?: true
    price?: true
    quantity?: true
    startDate?: true
    expiryDate?: true
    salonId?: true
    createdAt?: true
    updatedAt?: true
    durationMinutes?: true
    imageUrl?: true
    _all?: true
  }

  export type DealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deal to aggregate.
     */
    where?: DealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deals
    **/
    _count?: true | DealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealMaxAggregateInputType
  }

  export type GetDealAggregateType<T extends DealAggregateArgs> = {
        [P in keyof T & keyof AggregateDeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeal[P]>
      : GetScalarType<T[P], AggregateDeal[P]>
  }




  export type DealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealWhereInput
    orderBy?: DealOrderByWithAggregationInput | DealOrderByWithAggregationInput[]
    by: DealScalarFieldEnum[] | DealScalarFieldEnum
    having?: DealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealCountAggregateInputType | true
    _avg?: DealAvgAggregateInputType
    _sum?: DealSumAggregateInputType
    _min?: DealMinAggregateInputType
    _max?: DealMaxAggregateInputType
  }

  export type DealGroupByOutputType = {
    id: number
    title: string
    description: string
    originalPrice: Decimal
    price: Decimal
    quantity: number
    startDate: Date
    expiryDate: Date
    salonId: number
    createdAt: Date
    updatedAt: Date
    durationMinutes: number
    imageUrl: string | null
    _count: DealCountAggregateOutputType | null
    _avg: DealAvgAggregateOutputType | null
    _sum: DealSumAggregateOutputType | null
    _min: DealMinAggregateOutputType | null
    _max: DealMaxAggregateOutputType | null
  }

  type GetDealGroupByPayload<T extends DealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealGroupByOutputType[P]>
            : GetScalarType<T[P], DealGroupByOutputType[P]>
        }
      >
    >


  export type DealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    originalPrice?: boolean
    price?: boolean
    quantity?: boolean
    startDate?: boolean
    expiryDate?: boolean
    salonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    durationMinutes?: boolean
    imageUrl?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deal"]>

  export type DealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    originalPrice?: boolean
    price?: boolean
    quantity?: boolean
    startDate?: boolean
    expiryDate?: boolean
    salonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    durationMinutes?: boolean
    imageUrl?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deal"]>

  export type DealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    originalPrice?: boolean
    price?: boolean
    quantity?: boolean
    startDate?: boolean
    expiryDate?: boolean
    salonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    durationMinutes?: boolean
    imageUrl?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deal"]>

  export type DealSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    originalPrice?: boolean
    price?: boolean
    quantity?: boolean
    startDate?: boolean
    expiryDate?: boolean
    salonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    durationMinutes?: boolean
    imageUrl?: boolean
  }

  export type DealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "originalPrice" | "price" | "quantity" | "startDate" | "expiryDate" | "salonId" | "createdAt" | "updatedAt" | "durationMinutes" | "imageUrl", ExtArgs["result"]["deal"]>
  export type DealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type DealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type DealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $DealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deal"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      originalPrice: Prisma.Decimal
      price: Prisma.Decimal
      quantity: number
      startDate: Date
      expiryDate: Date
      salonId: number
      createdAt: Date
      updatedAt: Date
      durationMinutes: number
      imageUrl: string | null
    }, ExtArgs["result"]["deal"]>
    composites: {}
  }

  type DealGetPayload<S extends boolean | null | undefined | DealDefaultArgs> = $Result.GetResult<Prisma.$DealPayload, S>

  type DealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealCountAggregateInputType | true
    }

  export interface DealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deal'], meta: { name: 'Deal' } }
    /**
     * Find zero or one Deal that matches the filter.
     * @param {DealFindUniqueArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealFindUniqueArgs>(args: SelectSubset<T, DealFindUniqueArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealFindUniqueOrThrowArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealFindUniqueOrThrowArgs>(args: SelectSubset<T, DealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealFindFirstArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealFindFirstArgs>(args?: SelectSubset<T, DealFindFirstArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealFindFirstOrThrowArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealFindFirstOrThrowArgs>(args?: SelectSubset<T, DealFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deals
     * const deals = await prisma.deal.findMany()
     * 
     * // Get first 10 Deals
     * const deals = await prisma.deal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealWithIdOnly = await prisma.deal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealFindManyArgs>(args?: SelectSubset<T, DealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deal.
     * @param {DealCreateArgs} args - Arguments to create a Deal.
     * @example
     * // Create one Deal
     * const Deal = await prisma.deal.create({
     *   data: {
     *     // ... data to create a Deal
     *   }
     * })
     * 
     */
    create<T extends DealCreateArgs>(args: SelectSubset<T, DealCreateArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deals.
     * @param {DealCreateManyArgs} args - Arguments to create many Deals.
     * @example
     * // Create many Deals
     * const deal = await prisma.deal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealCreateManyArgs>(args?: SelectSubset<T, DealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deals and returns the data saved in the database.
     * @param {DealCreateManyAndReturnArgs} args - Arguments to create many Deals.
     * @example
     * // Create many Deals
     * const deal = await prisma.deal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deals and only return the `id`
     * const dealWithIdOnly = await prisma.deal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealCreateManyAndReturnArgs>(args?: SelectSubset<T, DealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deal.
     * @param {DealDeleteArgs} args - Arguments to delete one Deal.
     * @example
     * // Delete one Deal
     * const Deal = await prisma.deal.delete({
     *   where: {
     *     // ... filter to delete one Deal
     *   }
     * })
     * 
     */
    delete<T extends DealDeleteArgs>(args: SelectSubset<T, DealDeleteArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deal.
     * @param {DealUpdateArgs} args - Arguments to update one Deal.
     * @example
     * // Update one Deal
     * const deal = await prisma.deal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealUpdateArgs>(args: SelectSubset<T, DealUpdateArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deals.
     * @param {DealDeleteManyArgs} args - Arguments to filter Deals to delete.
     * @example
     * // Delete a few Deals
     * const { count } = await prisma.deal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealDeleteManyArgs>(args?: SelectSubset<T, DealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deals
     * const deal = await prisma.deal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealUpdateManyArgs>(args: SelectSubset<T, DealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deals and returns the data updated in the database.
     * @param {DealUpdateManyAndReturnArgs} args - Arguments to update many Deals.
     * @example
     * // Update many Deals
     * const deal = await prisma.deal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deals and only return the `id`
     * const dealWithIdOnly = await prisma.deal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DealUpdateManyAndReturnArgs>(args: SelectSubset<T, DealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deal.
     * @param {DealUpsertArgs} args - Arguments to update or create a Deal.
     * @example
     * // Update or create a Deal
     * const deal = await prisma.deal.upsert({
     *   create: {
     *     // ... data to create a Deal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deal we want to update
     *   }
     * })
     */
    upsert<T extends DealUpsertArgs>(args: SelectSubset<T, DealUpsertArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCountArgs} args - Arguments to filter Deals to count.
     * @example
     * // Count the number of Deals
     * const count = await prisma.deal.count({
     *   where: {
     *     // ... the filter for the Deals we want to count
     *   }
     * })
    **/
    count<T extends DealCountArgs>(
      args?: Subset<T, DealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealAggregateArgs>(args: Subset<T, DealAggregateArgs>): Prisma.PrismaPromise<GetDealAggregateType<T>>

    /**
     * Group by Deal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealGroupByArgs['orderBy'] }
        : { orderBy?: DealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deal model
   */
  readonly fields: DealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deal model
   */
  interface DealFieldRefs {
    readonly id: FieldRef<"Deal", 'Int'>
    readonly title: FieldRef<"Deal", 'String'>
    readonly description: FieldRef<"Deal", 'String'>
    readonly originalPrice: FieldRef<"Deal", 'Decimal'>
    readonly price: FieldRef<"Deal", 'Decimal'>
    readonly quantity: FieldRef<"Deal", 'Int'>
    readonly startDate: FieldRef<"Deal", 'DateTime'>
    readonly expiryDate: FieldRef<"Deal", 'DateTime'>
    readonly salonId: FieldRef<"Deal", 'Int'>
    readonly createdAt: FieldRef<"Deal", 'DateTime'>
    readonly updatedAt: FieldRef<"Deal", 'DateTime'>
    readonly durationMinutes: FieldRef<"Deal", 'Int'>
    readonly imageUrl: FieldRef<"Deal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Deal findUnique
   */
  export type DealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deal to fetch.
     */
    where: DealWhereUniqueInput
  }

  /**
   * Deal findUniqueOrThrow
   */
  export type DealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deal to fetch.
     */
    where: DealWhereUniqueInput
  }

  /**
   * Deal findFirst
   */
  export type DealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deal to fetch.
     */
    where?: DealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deals.
     */
    cursor?: DealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deals.
     */
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Deal findFirstOrThrow
   */
  export type DealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deal to fetch.
     */
    where?: DealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deals.
     */
    cursor?: DealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deals.
     */
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Deal findMany
   */
  export type DealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deals to fetch.
     */
    where?: DealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deals.
     */
    cursor?: DealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Deal create
   */
  export type DealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * The data needed to create a Deal.
     */
    data: XOR<DealCreateInput, DealUncheckedCreateInput>
  }

  /**
   * Deal createMany
   */
  export type DealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deals.
     */
    data: DealCreateManyInput | DealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deal createManyAndReturn
   */
  export type DealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * The data used to create many Deals.
     */
    data: DealCreateManyInput | DealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deal update
   */
  export type DealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * The data needed to update a Deal.
     */
    data: XOR<DealUpdateInput, DealUncheckedUpdateInput>
    /**
     * Choose, which Deal to update.
     */
    where: DealWhereUniqueInput
  }

  /**
   * Deal updateMany
   */
  export type DealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deals.
     */
    data: XOR<DealUpdateManyMutationInput, DealUncheckedUpdateManyInput>
    /**
     * Filter which Deals to update
     */
    where?: DealWhereInput
    /**
     * Limit how many Deals to update.
     */
    limit?: number
  }

  /**
   * Deal updateManyAndReturn
   */
  export type DealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * The data used to update Deals.
     */
    data: XOR<DealUpdateManyMutationInput, DealUncheckedUpdateManyInput>
    /**
     * Filter which Deals to update
     */
    where?: DealWhereInput
    /**
     * Limit how many Deals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deal upsert
   */
  export type DealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * The filter to search for the Deal to update in case it exists.
     */
    where: DealWhereUniqueInput
    /**
     * In case the Deal found by the `where` argument doesn't exist, create a new Deal with this data.
     */
    create: XOR<DealCreateInput, DealUncheckedCreateInput>
    /**
     * In case the Deal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealUpdateInput, DealUncheckedUpdateInput>
  }

  /**
   * Deal delete
   */
  export type DealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter which Deal to delete.
     */
    where: DealWhereUniqueInput
  }

  /**
   * Deal deleteMany
   */
  export type DealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deals to delete
     */
    where?: DealWhereInput
    /**
     * Limit how many Deals to delete.
     */
    limit?: number
  }

  /**
   * Deal without action
   */
  export type DealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deal
     */
    omit?: DealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
  }


  /**
   * Model WaitingList
   */

  export type AggregateWaitingList = {
    _count: WaitingListCountAggregateOutputType | null
    _avg: WaitingListAvgAggregateOutputType | null
    _sum: WaitingListSumAggregateOutputType | null
    _min: WaitingListMinAggregateOutputType | null
    _max: WaitingListMaxAggregateOutputType | null
  }

  export type WaitingListAvgAggregateOutputType = {
    id: number | null
  }

  export type WaitingListSumAggregateOutputType = {
    id: number | null
  }

  export type WaitingListMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
  }

  export type WaitingListMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
  }

  export type WaitingListCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    _all: number
  }


  export type WaitingListAvgAggregateInputType = {
    id?: true
  }

  export type WaitingListSumAggregateInputType = {
    id?: true
  }

  export type WaitingListMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type WaitingListMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type WaitingListCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type WaitingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaitingList to aggregate.
     */
    where?: WaitingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitingLists to fetch.
     */
    orderBy?: WaitingListOrderByWithRelationInput | WaitingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaitingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaitingLists
    **/
    _count?: true | WaitingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaitingListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaitingListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitingListMaxAggregateInputType
  }

  export type GetWaitingListAggregateType<T extends WaitingListAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitingList[P]>
      : GetScalarType<T[P], AggregateWaitingList[P]>
  }




  export type WaitingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaitingListWhereInput
    orderBy?: WaitingListOrderByWithAggregationInput | WaitingListOrderByWithAggregationInput[]
    by: WaitingListScalarFieldEnum[] | WaitingListScalarFieldEnum
    having?: WaitingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitingListCountAggregateInputType | true
    _avg?: WaitingListAvgAggregateInputType
    _sum?: WaitingListSumAggregateInputType
    _min?: WaitingListMinAggregateInputType
    _max?: WaitingListMaxAggregateInputType
  }

  export type WaitingListGroupByOutputType = {
    id: number
    email: string
    createdAt: Date
    _count: WaitingListCountAggregateOutputType | null
    _avg: WaitingListAvgAggregateOutputType | null
    _sum: WaitingListSumAggregateOutputType | null
    _min: WaitingListMinAggregateOutputType | null
    _max: WaitingListMaxAggregateOutputType | null
  }

  type GetWaitingListGroupByPayload<T extends WaitingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaitingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitingListGroupByOutputType[P]>
            : GetScalarType<T[P], WaitingListGroupByOutputType[P]>
        }
      >
    >


  export type WaitingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waitingList"]>

  export type WaitingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waitingList"]>

  export type WaitingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["waitingList"]>

  export type WaitingListSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type WaitingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt", ExtArgs["result"]["waitingList"]>

  export type $WaitingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaitingList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      createdAt: Date
    }, ExtArgs["result"]["waitingList"]>
    composites: {}
  }

  type WaitingListGetPayload<S extends boolean | null | undefined | WaitingListDefaultArgs> = $Result.GetResult<Prisma.$WaitingListPayload, S>

  type WaitingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaitingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaitingListCountAggregateInputType | true
    }

  export interface WaitingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaitingList'], meta: { name: 'WaitingList' } }
    /**
     * Find zero or one WaitingList that matches the filter.
     * @param {WaitingListFindUniqueArgs} args - Arguments to find a WaitingList
     * @example
     * // Get one WaitingList
     * const waitingList = await prisma.waitingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaitingListFindUniqueArgs>(args: SelectSubset<T, WaitingListFindUniqueArgs<ExtArgs>>): Prisma__WaitingListClient<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaitingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaitingListFindUniqueOrThrowArgs} args - Arguments to find a WaitingList
     * @example
     * // Get one WaitingList
     * const waitingList = await prisma.waitingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaitingListFindUniqueOrThrowArgs>(args: SelectSubset<T, WaitingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaitingListClient<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaitingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitingListFindFirstArgs} args - Arguments to find a WaitingList
     * @example
     * // Get one WaitingList
     * const waitingList = await prisma.waitingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaitingListFindFirstArgs>(args?: SelectSubset<T, WaitingListFindFirstArgs<ExtArgs>>): Prisma__WaitingListClient<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaitingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitingListFindFirstOrThrowArgs} args - Arguments to find a WaitingList
     * @example
     * // Get one WaitingList
     * const waitingList = await prisma.waitingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaitingListFindFirstOrThrowArgs>(args?: SelectSubset<T, WaitingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaitingListClient<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaitingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaitingLists
     * const waitingLists = await prisma.waitingList.findMany()
     * 
     * // Get first 10 WaitingLists
     * const waitingLists = await prisma.waitingList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waitingListWithIdOnly = await prisma.waitingList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaitingListFindManyArgs>(args?: SelectSubset<T, WaitingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaitingList.
     * @param {WaitingListCreateArgs} args - Arguments to create a WaitingList.
     * @example
     * // Create one WaitingList
     * const WaitingList = await prisma.waitingList.create({
     *   data: {
     *     // ... data to create a WaitingList
     *   }
     * })
     * 
     */
    create<T extends WaitingListCreateArgs>(args: SelectSubset<T, WaitingListCreateArgs<ExtArgs>>): Prisma__WaitingListClient<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaitingLists.
     * @param {WaitingListCreateManyArgs} args - Arguments to create many WaitingLists.
     * @example
     * // Create many WaitingLists
     * const waitingList = await prisma.waitingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaitingListCreateManyArgs>(args?: SelectSubset<T, WaitingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaitingLists and returns the data saved in the database.
     * @param {WaitingListCreateManyAndReturnArgs} args - Arguments to create many WaitingLists.
     * @example
     * // Create many WaitingLists
     * const waitingList = await prisma.waitingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaitingLists and only return the `id`
     * const waitingListWithIdOnly = await prisma.waitingList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaitingListCreateManyAndReturnArgs>(args?: SelectSubset<T, WaitingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaitingList.
     * @param {WaitingListDeleteArgs} args - Arguments to delete one WaitingList.
     * @example
     * // Delete one WaitingList
     * const WaitingList = await prisma.waitingList.delete({
     *   where: {
     *     // ... filter to delete one WaitingList
     *   }
     * })
     * 
     */
    delete<T extends WaitingListDeleteArgs>(args: SelectSubset<T, WaitingListDeleteArgs<ExtArgs>>): Prisma__WaitingListClient<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaitingList.
     * @param {WaitingListUpdateArgs} args - Arguments to update one WaitingList.
     * @example
     * // Update one WaitingList
     * const waitingList = await prisma.waitingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaitingListUpdateArgs>(args: SelectSubset<T, WaitingListUpdateArgs<ExtArgs>>): Prisma__WaitingListClient<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaitingLists.
     * @param {WaitingListDeleteManyArgs} args - Arguments to filter WaitingLists to delete.
     * @example
     * // Delete a few WaitingLists
     * const { count } = await prisma.waitingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaitingListDeleteManyArgs>(args?: SelectSubset<T, WaitingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaitingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaitingLists
     * const waitingList = await prisma.waitingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaitingListUpdateManyArgs>(args: SelectSubset<T, WaitingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaitingLists and returns the data updated in the database.
     * @param {WaitingListUpdateManyAndReturnArgs} args - Arguments to update many WaitingLists.
     * @example
     * // Update many WaitingLists
     * const waitingList = await prisma.waitingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaitingLists and only return the `id`
     * const waitingListWithIdOnly = await prisma.waitingList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaitingListUpdateManyAndReturnArgs>(args: SelectSubset<T, WaitingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaitingList.
     * @param {WaitingListUpsertArgs} args - Arguments to update or create a WaitingList.
     * @example
     * // Update or create a WaitingList
     * const waitingList = await prisma.waitingList.upsert({
     *   create: {
     *     // ... data to create a WaitingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaitingList we want to update
     *   }
     * })
     */
    upsert<T extends WaitingListUpsertArgs>(args: SelectSubset<T, WaitingListUpsertArgs<ExtArgs>>): Prisma__WaitingListClient<$Result.GetResult<Prisma.$WaitingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaitingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitingListCountArgs} args - Arguments to filter WaitingLists to count.
     * @example
     * // Count the number of WaitingLists
     * const count = await prisma.waitingList.count({
     *   where: {
     *     // ... the filter for the WaitingLists we want to count
     *   }
     * })
    **/
    count<T extends WaitingListCountArgs>(
      args?: Subset<T, WaitingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaitingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaitingListAggregateArgs>(args: Subset<T, WaitingListAggregateArgs>): Prisma.PrismaPromise<GetWaitingListAggregateType<T>>

    /**
     * Group by WaitingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaitingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaitingListGroupByArgs['orderBy'] }
        : { orderBy?: WaitingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaitingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaitingList model
   */
  readonly fields: WaitingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaitingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaitingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaitingList model
   */
  interface WaitingListFieldRefs {
    readonly id: FieldRef<"WaitingList", 'Int'>
    readonly email: FieldRef<"WaitingList", 'String'>
    readonly createdAt: FieldRef<"WaitingList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaitingList findUnique
   */
  export type WaitingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * Filter, which WaitingList to fetch.
     */
    where: WaitingListWhereUniqueInput
  }

  /**
   * WaitingList findUniqueOrThrow
   */
  export type WaitingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * Filter, which WaitingList to fetch.
     */
    where: WaitingListWhereUniqueInput
  }

  /**
   * WaitingList findFirst
   */
  export type WaitingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * Filter, which WaitingList to fetch.
     */
    where?: WaitingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitingLists to fetch.
     */
    orderBy?: WaitingListOrderByWithRelationInput | WaitingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaitingLists.
     */
    cursor?: WaitingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaitingLists.
     */
    distinct?: WaitingListScalarFieldEnum | WaitingListScalarFieldEnum[]
  }

  /**
   * WaitingList findFirstOrThrow
   */
  export type WaitingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * Filter, which WaitingList to fetch.
     */
    where?: WaitingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitingLists to fetch.
     */
    orderBy?: WaitingListOrderByWithRelationInput | WaitingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaitingLists.
     */
    cursor?: WaitingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaitingLists.
     */
    distinct?: WaitingListScalarFieldEnum | WaitingListScalarFieldEnum[]
  }

  /**
   * WaitingList findMany
   */
  export type WaitingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * Filter, which WaitingLists to fetch.
     */
    where?: WaitingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitingLists to fetch.
     */
    orderBy?: WaitingListOrderByWithRelationInput | WaitingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaitingLists.
     */
    cursor?: WaitingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitingLists.
     */
    skip?: number
    distinct?: WaitingListScalarFieldEnum | WaitingListScalarFieldEnum[]
  }

  /**
   * WaitingList create
   */
  export type WaitingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * The data needed to create a WaitingList.
     */
    data: XOR<WaitingListCreateInput, WaitingListUncheckedCreateInput>
  }

  /**
   * WaitingList createMany
   */
  export type WaitingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaitingLists.
     */
    data: WaitingListCreateManyInput | WaitingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaitingList createManyAndReturn
   */
  export type WaitingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * The data used to create many WaitingLists.
     */
    data: WaitingListCreateManyInput | WaitingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaitingList update
   */
  export type WaitingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * The data needed to update a WaitingList.
     */
    data: XOR<WaitingListUpdateInput, WaitingListUncheckedUpdateInput>
    /**
     * Choose, which WaitingList to update.
     */
    where: WaitingListWhereUniqueInput
  }

  /**
   * WaitingList updateMany
   */
  export type WaitingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaitingLists.
     */
    data: XOR<WaitingListUpdateManyMutationInput, WaitingListUncheckedUpdateManyInput>
    /**
     * Filter which WaitingLists to update
     */
    where?: WaitingListWhereInput
    /**
     * Limit how many WaitingLists to update.
     */
    limit?: number
  }

  /**
   * WaitingList updateManyAndReturn
   */
  export type WaitingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * The data used to update WaitingLists.
     */
    data: XOR<WaitingListUpdateManyMutationInput, WaitingListUncheckedUpdateManyInput>
    /**
     * Filter which WaitingLists to update
     */
    where?: WaitingListWhereInput
    /**
     * Limit how many WaitingLists to update.
     */
    limit?: number
  }

  /**
   * WaitingList upsert
   */
  export type WaitingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * The filter to search for the WaitingList to update in case it exists.
     */
    where: WaitingListWhereUniqueInput
    /**
     * In case the WaitingList found by the `where` argument doesn't exist, create a new WaitingList with this data.
     */
    create: XOR<WaitingListCreateInput, WaitingListUncheckedCreateInput>
    /**
     * In case the WaitingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaitingListUpdateInput, WaitingListUncheckedUpdateInput>
  }

  /**
   * WaitingList delete
   */
  export type WaitingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
    /**
     * Filter which WaitingList to delete.
     */
    where: WaitingListWhereUniqueInput
  }

  /**
   * WaitingList deleteMany
   */
  export type WaitingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaitingLists to delete
     */
    where?: WaitingListWhereInput
    /**
     * Limit how many WaitingLists to delete.
     */
    limit?: number
  }

  /**
   * WaitingList without action
   */
  export type WaitingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitingList
     */
    select?: WaitingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitingList
     */
    omit?: WaitingListOmit<ExtArgs> | null
  }


  /**
   * Model SalonImage
   */

  export type AggregateSalonImage = {
    _count: SalonImageCountAggregateOutputType | null
    _avg: SalonImageAvgAggregateOutputType | null
    _sum: SalonImageSumAggregateOutputType | null
    _min: SalonImageMinAggregateOutputType | null
    _max: SalonImageMaxAggregateOutputType | null
  }

  export type SalonImageAvgAggregateOutputType = {
    id: number | null
    salonId: number | null
  }

  export type SalonImageSumAggregateOutputType = {
    id: number | null
    salonId: number | null
  }

  export type SalonImageMinAggregateOutputType = {
    id: number | null
    salonId: number | null
    url: string | null
    fileName: string | null
    createdAt: Date | null
  }

  export type SalonImageMaxAggregateOutputType = {
    id: number | null
    salonId: number | null
    url: string | null
    fileName: string | null
    createdAt: Date | null
  }

  export type SalonImageCountAggregateOutputType = {
    id: number
    salonId: number
    url: number
    fileName: number
    createdAt: number
    _all: number
  }


  export type SalonImageAvgAggregateInputType = {
    id?: true
    salonId?: true
  }

  export type SalonImageSumAggregateInputType = {
    id?: true
    salonId?: true
  }

  export type SalonImageMinAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    fileName?: true
    createdAt?: true
  }

  export type SalonImageMaxAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    fileName?: true
    createdAt?: true
  }

  export type SalonImageCountAggregateInputType = {
    id?: true
    salonId?: true
    url?: true
    fileName?: true
    createdAt?: true
    _all?: true
  }

  export type SalonImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalonImage to aggregate.
     */
    where?: SalonImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonImages to fetch.
     */
    orderBy?: SalonImageOrderByWithRelationInput | SalonImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalonImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalonImages
    **/
    _count?: true | SalonImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalonImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalonImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalonImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalonImageMaxAggregateInputType
  }

  export type GetSalonImageAggregateType<T extends SalonImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSalonImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalonImage[P]>
      : GetScalarType<T[P], AggregateSalonImage[P]>
  }




  export type SalonImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalonImageWhereInput
    orderBy?: SalonImageOrderByWithAggregationInput | SalonImageOrderByWithAggregationInput[]
    by: SalonImageScalarFieldEnum[] | SalonImageScalarFieldEnum
    having?: SalonImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalonImageCountAggregateInputType | true
    _avg?: SalonImageAvgAggregateInputType
    _sum?: SalonImageSumAggregateInputType
    _min?: SalonImageMinAggregateInputType
    _max?: SalonImageMaxAggregateInputType
  }

  export type SalonImageGroupByOutputType = {
    id: number
    salonId: number
    url: string
    fileName: string | null
    createdAt: Date
    _count: SalonImageCountAggregateOutputType | null
    _avg: SalonImageAvgAggregateOutputType | null
    _sum: SalonImageSumAggregateOutputType | null
    _min: SalonImageMinAggregateOutputType | null
    _max: SalonImageMaxAggregateOutputType | null
  }

  type GetSalonImageGroupByPayload<T extends SalonImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalonImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalonImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalonImageGroupByOutputType[P]>
            : GetScalarType<T[P], SalonImageGroupByOutputType[P]>
        }
      >
    >


  export type SalonImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    url?: boolean
    fileName?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonImage"]>

  export type SalonImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    url?: boolean
    fileName?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonImage"]>

  export type SalonImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salonId?: boolean
    url?: boolean
    fileName?: boolean
    createdAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salonImage"]>

  export type SalonImageSelectScalar = {
    id?: boolean
    salonId?: boolean
    url?: boolean
    fileName?: boolean
    createdAt?: boolean
  }

  export type SalonImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salonId" | "url" | "fileName" | "createdAt", ExtArgs["result"]["salonImage"]>
  export type SalonImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type SalonImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type SalonImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $SalonImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalonImage"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      salonId: number
      url: string
      fileName: string | null
      createdAt: Date
    }, ExtArgs["result"]["salonImage"]>
    composites: {}
  }

  type SalonImageGetPayload<S extends boolean | null | undefined | SalonImageDefaultArgs> = $Result.GetResult<Prisma.$SalonImagePayload, S>

  type SalonImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalonImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalonImageCountAggregateInputType | true
    }

  export interface SalonImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalonImage'], meta: { name: 'SalonImage' } }
    /**
     * Find zero or one SalonImage that matches the filter.
     * @param {SalonImageFindUniqueArgs} args - Arguments to find a SalonImage
     * @example
     * // Get one SalonImage
     * const salonImage = await prisma.salonImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalonImageFindUniqueArgs>(args: SelectSubset<T, SalonImageFindUniqueArgs<ExtArgs>>): Prisma__SalonImageClient<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalonImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalonImageFindUniqueOrThrowArgs} args - Arguments to find a SalonImage
     * @example
     * // Get one SalonImage
     * const salonImage = await prisma.salonImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalonImageFindUniqueOrThrowArgs>(args: SelectSubset<T, SalonImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalonImageClient<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalonImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonImageFindFirstArgs} args - Arguments to find a SalonImage
     * @example
     * // Get one SalonImage
     * const salonImage = await prisma.salonImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalonImageFindFirstArgs>(args?: SelectSubset<T, SalonImageFindFirstArgs<ExtArgs>>): Prisma__SalonImageClient<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalonImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonImageFindFirstOrThrowArgs} args - Arguments to find a SalonImage
     * @example
     * // Get one SalonImage
     * const salonImage = await prisma.salonImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalonImageFindFirstOrThrowArgs>(args?: SelectSubset<T, SalonImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalonImageClient<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalonImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalonImages
     * const salonImages = await prisma.salonImage.findMany()
     * 
     * // Get first 10 SalonImages
     * const salonImages = await prisma.salonImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salonImageWithIdOnly = await prisma.salonImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalonImageFindManyArgs>(args?: SelectSubset<T, SalonImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalonImage.
     * @param {SalonImageCreateArgs} args - Arguments to create a SalonImage.
     * @example
     * // Create one SalonImage
     * const SalonImage = await prisma.salonImage.create({
     *   data: {
     *     // ... data to create a SalonImage
     *   }
     * })
     * 
     */
    create<T extends SalonImageCreateArgs>(args: SelectSubset<T, SalonImageCreateArgs<ExtArgs>>): Prisma__SalonImageClient<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalonImages.
     * @param {SalonImageCreateManyArgs} args - Arguments to create many SalonImages.
     * @example
     * // Create many SalonImages
     * const salonImage = await prisma.salonImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalonImageCreateManyArgs>(args?: SelectSubset<T, SalonImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalonImages and returns the data saved in the database.
     * @param {SalonImageCreateManyAndReturnArgs} args - Arguments to create many SalonImages.
     * @example
     * // Create many SalonImages
     * const salonImage = await prisma.salonImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalonImages and only return the `id`
     * const salonImageWithIdOnly = await prisma.salonImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalonImageCreateManyAndReturnArgs>(args?: SelectSubset<T, SalonImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalonImage.
     * @param {SalonImageDeleteArgs} args - Arguments to delete one SalonImage.
     * @example
     * // Delete one SalonImage
     * const SalonImage = await prisma.salonImage.delete({
     *   where: {
     *     // ... filter to delete one SalonImage
     *   }
     * })
     * 
     */
    delete<T extends SalonImageDeleteArgs>(args: SelectSubset<T, SalonImageDeleteArgs<ExtArgs>>): Prisma__SalonImageClient<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalonImage.
     * @param {SalonImageUpdateArgs} args - Arguments to update one SalonImage.
     * @example
     * // Update one SalonImage
     * const salonImage = await prisma.salonImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalonImageUpdateArgs>(args: SelectSubset<T, SalonImageUpdateArgs<ExtArgs>>): Prisma__SalonImageClient<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalonImages.
     * @param {SalonImageDeleteManyArgs} args - Arguments to filter SalonImages to delete.
     * @example
     * // Delete a few SalonImages
     * const { count } = await prisma.salonImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalonImageDeleteManyArgs>(args?: SelectSubset<T, SalonImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalonImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalonImages
     * const salonImage = await prisma.salonImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalonImageUpdateManyArgs>(args: SelectSubset<T, SalonImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalonImages and returns the data updated in the database.
     * @param {SalonImageUpdateManyAndReturnArgs} args - Arguments to update many SalonImages.
     * @example
     * // Update many SalonImages
     * const salonImage = await prisma.salonImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalonImages and only return the `id`
     * const salonImageWithIdOnly = await prisma.salonImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalonImageUpdateManyAndReturnArgs>(args: SelectSubset<T, SalonImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalonImage.
     * @param {SalonImageUpsertArgs} args - Arguments to update or create a SalonImage.
     * @example
     * // Update or create a SalonImage
     * const salonImage = await prisma.salonImage.upsert({
     *   create: {
     *     // ... data to create a SalonImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalonImage we want to update
     *   }
     * })
     */
    upsert<T extends SalonImageUpsertArgs>(args: SelectSubset<T, SalonImageUpsertArgs<ExtArgs>>): Prisma__SalonImageClient<$Result.GetResult<Prisma.$SalonImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalonImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonImageCountArgs} args - Arguments to filter SalonImages to count.
     * @example
     * // Count the number of SalonImages
     * const count = await prisma.salonImage.count({
     *   where: {
     *     // ... the filter for the SalonImages we want to count
     *   }
     * })
    **/
    count<T extends SalonImageCountArgs>(
      args?: Subset<T, SalonImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalonImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalonImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalonImageAggregateArgs>(args: Subset<T, SalonImageAggregateArgs>): Prisma.PrismaPromise<GetSalonImageAggregateType<T>>

    /**
     * Group by SalonImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalonImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalonImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalonImageGroupByArgs['orderBy'] }
        : { orderBy?: SalonImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalonImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalonImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalonImage model
   */
  readonly fields: SalonImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalonImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalonImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalonImage model
   */
  interface SalonImageFieldRefs {
    readonly id: FieldRef<"SalonImage", 'Int'>
    readonly salonId: FieldRef<"SalonImage", 'Int'>
    readonly url: FieldRef<"SalonImage", 'String'>
    readonly fileName: FieldRef<"SalonImage", 'String'>
    readonly createdAt: FieldRef<"SalonImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalonImage findUnique
   */
  export type SalonImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * Filter, which SalonImage to fetch.
     */
    where: SalonImageWhereUniqueInput
  }

  /**
   * SalonImage findUniqueOrThrow
   */
  export type SalonImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * Filter, which SalonImage to fetch.
     */
    where: SalonImageWhereUniqueInput
  }

  /**
   * SalonImage findFirst
   */
  export type SalonImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * Filter, which SalonImage to fetch.
     */
    where?: SalonImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonImages to fetch.
     */
    orderBy?: SalonImageOrderByWithRelationInput | SalonImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalonImages.
     */
    cursor?: SalonImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalonImages.
     */
    distinct?: SalonImageScalarFieldEnum | SalonImageScalarFieldEnum[]
  }

  /**
   * SalonImage findFirstOrThrow
   */
  export type SalonImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * Filter, which SalonImage to fetch.
     */
    where?: SalonImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonImages to fetch.
     */
    orderBy?: SalonImageOrderByWithRelationInput | SalonImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalonImages.
     */
    cursor?: SalonImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalonImages.
     */
    distinct?: SalonImageScalarFieldEnum | SalonImageScalarFieldEnum[]
  }

  /**
   * SalonImage findMany
   */
  export type SalonImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * Filter, which SalonImages to fetch.
     */
    where?: SalonImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalonImages to fetch.
     */
    orderBy?: SalonImageOrderByWithRelationInput | SalonImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalonImages.
     */
    cursor?: SalonImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalonImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalonImages.
     */
    skip?: number
    distinct?: SalonImageScalarFieldEnum | SalonImageScalarFieldEnum[]
  }

  /**
   * SalonImage create
   */
  export type SalonImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * The data needed to create a SalonImage.
     */
    data: XOR<SalonImageCreateInput, SalonImageUncheckedCreateInput>
  }

  /**
   * SalonImage createMany
   */
  export type SalonImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalonImages.
     */
    data: SalonImageCreateManyInput | SalonImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalonImage createManyAndReturn
   */
  export type SalonImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * The data used to create many SalonImages.
     */
    data: SalonImageCreateManyInput | SalonImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalonImage update
   */
  export type SalonImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * The data needed to update a SalonImage.
     */
    data: XOR<SalonImageUpdateInput, SalonImageUncheckedUpdateInput>
    /**
     * Choose, which SalonImage to update.
     */
    where: SalonImageWhereUniqueInput
  }

  /**
   * SalonImage updateMany
   */
  export type SalonImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalonImages.
     */
    data: XOR<SalonImageUpdateManyMutationInput, SalonImageUncheckedUpdateManyInput>
    /**
     * Filter which SalonImages to update
     */
    where?: SalonImageWhereInput
    /**
     * Limit how many SalonImages to update.
     */
    limit?: number
  }

  /**
   * SalonImage updateManyAndReturn
   */
  export type SalonImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * The data used to update SalonImages.
     */
    data: XOR<SalonImageUpdateManyMutationInput, SalonImageUncheckedUpdateManyInput>
    /**
     * Filter which SalonImages to update
     */
    where?: SalonImageWhereInput
    /**
     * Limit how many SalonImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalonImage upsert
   */
  export type SalonImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * The filter to search for the SalonImage to update in case it exists.
     */
    where: SalonImageWhereUniqueInput
    /**
     * In case the SalonImage found by the `where` argument doesn't exist, create a new SalonImage with this data.
     */
    create: XOR<SalonImageCreateInput, SalonImageUncheckedCreateInput>
    /**
     * In case the SalonImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalonImageUpdateInput, SalonImageUncheckedUpdateInput>
  }

  /**
   * SalonImage delete
   */
  export type SalonImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
    /**
     * Filter which SalonImage to delete.
     */
    where: SalonImageWhereUniqueInput
  }

  /**
   * SalonImage deleteMany
   */
  export type SalonImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalonImages to delete
     */
    where?: SalonImageWhereInput
    /**
     * Limit how many SalonImages to delete.
     */
    limit?: number
  }

  /**
   * SalonImage without action
   */
  export type SalonImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalonImage
     */
    select?: SalonImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalonImage
     */
    omit?: SalonImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalonImageInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    salonId: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    salonId: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    salary: string | null
    salonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    salary: string | null
    salonId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    salary: number
    salonId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    salonId?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    salonId?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    salary?: true
    salonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    salary?: true
    salonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    salary?: true
    salonId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    title: string
    description: string | null
    salary: string | null
    salonId: number
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    salary?: boolean
    salonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    salary?: boolean
    salonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    salary?: boolean
    salonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    salary?: boolean
    salonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "salary" | "salonId" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salon?: boolean | SalonDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      salon: Prisma.$SalonPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      salary: string | null
      salonId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salon<T extends SalonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalonDefaultArgs<ExtArgs>>): Prisma__SalonClient<$Result.GetResult<Prisma.$SalonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly salary: FieldRef<"Job", 'String'>
    readonly salonId: FieldRef<"Job", 'Int'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    jobId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantId: string | null
    resumeText: string | null
    linkedInURL: string | null
    coverLetter: string | null
    status: $Enums.AppStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantId: string | null
    resumeText: string | null
    linkedInURL: string | null
    coverLetter: string | null
    status: $Enums.AppStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    jobId: number
    applicantId: number
    resumeText: number
    linkedInURL: number
    coverLetter: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    jobId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
    resumeText?: true
    linkedInURL?: true
    coverLetter?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
    resumeText?: true
    linkedInURL?: true
    coverLetter?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
    resumeText?: true
    linkedInURL?: true
    coverLetter?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    jobId: number
    applicantId: string
    resumeText: string | null
    linkedInURL: string | null
    coverLetter: string | null
    status: $Enums.AppStatus
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantId?: boolean
    resumeText?: boolean
    linkedInURL?: boolean
    coverLetter?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantId?: boolean
    resumeText?: boolean
    linkedInURL?: boolean
    coverLetter?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantId?: boolean
    resumeText?: boolean
    linkedInURL?: boolean
    coverLetter?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    jobId?: boolean
    applicantId?: boolean
    resumeText?: boolean
    linkedInURL?: boolean
    coverLetter?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "applicantId" | "resumeText" | "linkedInURL" | "coverLetter" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      applicant: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobId: number
      applicantId: string
      resumeText: string | null
      linkedInURL: string | null
      coverLetter: string | null
      status: $Enums.AppStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly jobId: FieldRef<"Application", 'Int'>
    readonly applicantId: FieldRef<"Application", 'String'>
    readonly resumeText: FieldRef<"Application", 'String'>
    readonly linkedInURL: FieldRef<"Application", 'String'>
    readonly coverLetter: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'AppStatus'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    displayName: 'displayName',
    phone: 'phone',
    profilePicture: 'profilePicture',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    isEmailVerified: 'isEmailVerified',
    emailVerificationToken: 'emailVerificationToken',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpires: 'passwordResetExpires',
    lastLoginAt: 'lastLoginAt',
    CVR: 'CVR',
    address: 'address',
    city: 'city',
    zipCode: 'zipCode',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SalonScalarFieldEnum: {
    salonId: 'salonId',
    salonName: 'salonName',
    userId: 'userId',
    salonTypeId: 'salonTypeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    address: 'address',
    city: 'city',
    zipCode: 'zipCode',
    country: 'country',
    phone: 'phone'
  };

  export type SalonScalarFieldEnum = (typeof SalonScalarFieldEnum)[keyof typeof SalonScalarFieldEnum]


  export const SalonTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SalonTypeScalarFieldEnum = (typeof SalonTypeScalarFieldEnum)[keyof typeof SalonTypeScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SalonServiceScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    serviceId: 'serviceId'
  };

  export type SalonServiceScalarFieldEnum = (typeof SalonServiceScalarFieldEnum)[keyof typeof SalonServiceScalarFieldEnum]


  export const DealScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    originalPrice: 'originalPrice',
    price: 'price',
    quantity: 'quantity',
    startDate: 'startDate',
    expiryDate: 'expiryDate',
    salonId: 'salonId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    durationMinutes: 'durationMinutes',
    imageUrl: 'imageUrl'
  };

  export type DealScalarFieldEnum = (typeof DealScalarFieldEnum)[keyof typeof DealScalarFieldEnum]


  export const WaitingListScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type WaitingListScalarFieldEnum = (typeof WaitingListScalarFieldEnum)[keyof typeof WaitingListScalarFieldEnum]


  export const SalonImageScalarFieldEnum: {
    id: 'id',
    salonId: 'salonId',
    url: 'url',
    fileName: 'fileName',
    createdAt: 'createdAt'
  };

  export type SalonImageScalarFieldEnum = (typeof SalonImageScalarFieldEnum)[keyof typeof SalonImageScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    salary: 'salary',
    salonId: 'salonId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    applicantId: 'applicantId',
    resumeText: 'resumeText',
    linkedInURL: 'linkedInURL',
    coverLetter: 'coverLetter',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'AppStatus'
   */
  export type EnumAppStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppStatus'>
    


  /**
   * Reference to a field of type 'AppStatus[]'
   */
  export type ListEnumAppStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    accessToken?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    CVR?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleNameNullableFilter<"User"> | $Enums.RoleName | null
    salons?: SalonListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    phone?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    CVR?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    salons?: SalonOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    accessToken?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    CVR?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleNameNullableFilter<"User"> | $Enums.RoleName | null
    salons?: SalonListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    phone?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    CVR?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    CVR?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumRoleNameNullableWithAggregatesFilter<"User"> | $Enums.RoleName | null
  }

  export type SalonWhereInput = {
    AND?: SalonWhereInput | SalonWhereInput[]
    OR?: SalonWhereInput[]
    NOT?: SalonWhereInput | SalonWhereInput[]
    salonId?: IntFilter<"Salon"> | number
    salonName?: StringFilter<"Salon"> | string
    userId?: StringFilter<"Salon"> | string
    salonTypeId?: IntFilter<"Salon"> | number
    createdAt?: DateTimeFilter<"Salon"> | Date | string
    updatedAt?: DateTimeFilter<"Salon"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Salon"> | Date | string | null
    address?: StringNullableFilter<"Salon"> | string | null
    city?: StringNullableFilter<"Salon"> | string | null
    zipCode?: StringNullableFilter<"Salon"> | string | null
    country?: StringNullableFilter<"Salon"> | string | null
    phone?: StringNullableFilter<"Salon"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    salonType?: XOR<SalonTypeScalarRelationFilter, SalonTypeWhereInput>
    services?: SalonServiceListRelationFilter
    images?: SalonImageListRelationFilter
    deals?: DealListRelationFilter
    jobs?: JobListRelationFilter
  }

  export type SalonOrderByWithRelationInput = {
    salonId?: SortOrder
    salonName?: SortOrder
    userId?: SortOrder
    salonTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    salonType?: SalonTypeOrderByWithRelationInput
    services?: SalonServiceOrderByRelationAggregateInput
    images?: SalonImageOrderByRelationAggregateInput
    deals?: DealOrderByRelationAggregateInput
    jobs?: JobOrderByRelationAggregateInput
  }

  export type SalonWhereUniqueInput = Prisma.AtLeast<{
    salonId?: number
    AND?: SalonWhereInput | SalonWhereInput[]
    OR?: SalonWhereInput[]
    NOT?: SalonWhereInput | SalonWhereInput[]
    salonName?: StringFilter<"Salon"> | string
    userId?: StringFilter<"Salon"> | string
    salonTypeId?: IntFilter<"Salon"> | number
    createdAt?: DateTimeFilter<"Salon"> | Date | string
    updatedAt?: DateTimeFilter<"Salon"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Salon"> | Date | string | null
    address?: StringNullableFilter<"Salon"> | string | null
    city?: StringNullableFilter<"Salon"> | string | null
    zipCode?: StringNullableFilter<"Salon"> | string | null
    country?: StringNullableFilter<"Salon"> | string | null
    phone?: StringNullableFilter<"Salon"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    salonType?: XOR<SalonTypeScalarRelationFilter, SalonTypeWhereInput>
    services?: SalonServiceListRelationFilter
    images?: SalonImageListRelationFilter
    deals?: DealListRelationFilter
    jobs?: JobListRelationFilter
  }, "salonId">

  export type SalonOrderByWithAggregationInput = {
    salonId?: SortOrder
    salonName?: SortOrder
    userId?: SortOrder
    salonTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: SalonCountOrderByAggregateInput
    _avg?: SalonAvgOrderByAggregateInput
    _max?: SalonMaxOrderByAggregateInput
    _min?: SalonMinOrderByAggregateInput
    _sum?: SalonSumOrderByAggregateInput
  }

  export type SalonScalarWhereWithAggregatesInput = {
    AND?: SalonScalarWhereWithAggregatesInput | SalonScalarWhereWithAggregatesInput[]
    OR?: SalonScalarWhereWithAggregatesInput[]
    NOT?: SalonScalarWhereWithAggregatesInput | SalonScalarWhereWithAggregatesInput[]
    salonId?: IntWithAggregatesFilter<"Salon"> | number
    salonName?: StringWithAggregatesFilter<"Salon"> | string
    userId?: StringWithAggregatesFilter<"Salon"> | string
    salonTypeId?: IntWithAggregatesFilter<"Salon"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Salon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Salon"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Salon"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    city?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    country?: StringNullableWithAggregatesFilter<"Salon"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Salon"> | string | null
  }

  export type SalonTypeWhereInput = {
    AND?: SalonTypeWhereInput | SalonTypeWhereInput[]
    OR?: SalonTypeWhereInput[]
    NOT?: SalonTypeWhereInput | SalonTypeWhereInput[]
    id?: IntFilter<"SalonType"> | number
    name?: StringFilter<"SalonType"> | string
    salons?: SalonListRelationFilter
  }

  export type SalonTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    salons?: SalonOrderByRelationAggregateInput
  }

  export type SalonTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SalonTypeWhereInput | SalonTypeWhereInput[]
    OR?: SalonTypeWhereInput[]
    NOT?: SalonTypeWhereInput | SalonTypeWhereInput[]
    salons?: SalonListRelationFilter
  }, "id" | "name">

  export type SalonTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SalonTypeCountOrderByAggregateInput
    _avg?: SalonTypeAvgOrderByAggregateInput
    _max?: SalonTypeMaxOrderByAggregateInput
    _min?: SalonTypeMinOrderByAggregateInput
    _sum?: SalonTypeSumOrderByAggregateInput
  }

  export type SalonTypeScalarWhereWithAggregatesInput = {
    AND?: SalonTypeScalarWhereWithAggregatesInput | SalonTypeScalarWhereWithAggregatesInput[]
    OR?: SalonTypeScalarWhereWithAggregatesInput[]
    NOT?: SalonTypeScalarWhereWithAggregatesInput | SalonTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalonType"> | number
    name?: StringWithAggregatesFilter<"SalonType"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    category?: StringFilter<"Service"> | string
    salons?: SalonServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    salons?: SalonServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    category?: StringFilter<"Service"> | string
    salons?: SalonServiceListRelationFilter
  }, "id" | "name">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    category?: StringWithAggregatesFilter<"Service"> | string
  }

  export type SalonServiceWhereInput = {
    AND?: SalonServiceWhereInput | SalonServiceWhereInput[]
    OR?: SalonServiceWhereInput[]
    NOT?: SalonServiceWhereInput | SalonServiceWhereInput[]
    id?: IntFilter<"SalonService"> | number
    salonId?: IntFilter<"SalonService"> | number
    serviceId?: IntFilter<"SalonService"> | number
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type SalonServiceOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    serviceId?: SortOrder
    salon?: SalonOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type SalonServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    salonId_serviceId?: SalonServiceSalonIdServiceIdCompoundUniqueInput
    AND?: SalonServiceWhereInput | SalonServiceWhereInput[]
    OR?: SalonServiceWhereInput[]
    NOT?: SalonServiceWhereInput | SalonServiceWhereInput[]
    salonId?: IntFilter<"SalonService"> | number
    serviceId?: IntFilter<"SalonService"> | number
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "salonId_serviceId">

  export type SalonServiceOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    serviceId?: SortOrder
    _count?: SalonServiceCountOrderByAggregateInput
    _avg?: SalonServiceAvgOrderByAggregateInput
    _max?: SalonServiceMaxOrderByAggregateInput
    _min?: SalonServiceMinOrderByAggregateInput
    _sum?: SalonServiceSumOrderByAggregateInput
  }

  export type SalonServiceScalarWhereWithAggregatesInput = {
    AND?: SalonServiceScalarWhereWithAggregatesInput | SalonServiceScalarWhereWithAggregatesInput[]
    OR?: SalonServiceScalarWhereWithAggregatesInput[]
    NOT?: SalonServiceScalarWhereWithAggregatesInput | SalonServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalonService"> | number
    salonId?: IntWithAggregatesFilter<"SalonService"> | number
    serviceId?: IntWithAggregatesFilter<"SalonService"> | number
  }

  export type DealWhereInput = {
    AND?: DealWhereInput | DealWhereInput[]
    OR?: DealWhereInput[]
    NOT?: DealWhereInput | DealWhereInput[]
    id?: IntFilter<"Deal"> | number
    title?: StringFilter<"Deal"> | string
    description?: StringFilter<"Deal"> | string
    originalPrice?: DecimalFilter<"Deal"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Deal"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Deal"> | number
    startDate?: DateTimeFilter<"Deal"> | Date | string
    expiryDate?: DateTimeFilter<"Deal"> | Date | string
    salonId?: IntFilter<"Deal"> | number
    createdAt?: DateTimeFilter<"Deal"> | Date | string
    updatedAt?: DateTimeFilter<"Deal"> | Date | string
    durationMinutes?: IntFilter<"Deal"> | number
    imageUrl?: StringNullableFilter<"Deal"> | string | null
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
  }

  export type DealOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    originalPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    durationMinutes?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    salon?: SalonOrderByWithRelationInput
  }

  export type DealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DealWhereInput | DealWhereInput[]
    OR?: DealWhereInput[]
    NOT?: DealWhereInput | DealWhereInput[]
    title?: StringFilter<"Deal"> | string
    description?: StringFilter<"Deal"> | string
    originalPrice?: DecimalFilter<"Deal"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Deal"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Deal"> | number
    startDate?: DateTimeFilter<"Deal"> | Date | string
    expiryDate?: DateTimeFilter<"Deal"> | Date | string
    salonId?: IntFilter<"Deal"> | number
    createdAt?: DateTimeFilter<"Deal"> | Date | string
    updatedAt?: DateTimeFilter<"Deal"> | Date | string
    durationMinutes?: IntFilter<"Deal"> | number
    imageUrl?: StringNullableFilter<"Deal"> | string | null
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
  }, "id">

  export type DealOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    originalPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    durationMinutes?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: DealCountOrderByAggregateInput
    _avg?: DealAvgOrderByAggregateInput
    _max?: DealMaxOrderByAggregateInput
    _min?: DealMinOrderByAggregateInput
    _sum?: DealSumOrderByAggregateInput
  }

  export type DealScalarWhereWithAggregatesInput = {
    AND?: DealScalarWhereWithAggregatesInput | DealScalarWhereWithAggregatesInput[]
    OR?: DealScalarWhereWithAggregatesInput[]
    NOT?: DealScalarWhereWithAggregatesInput | DealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deal"> | number
    title?: StringWithAggregatesFilter<"Deal"> | string
    description?: StringWithAggregatesFilter<"Deal"> | string
    originalPrice?: DecimalWithAggregatesFilter<"Deal"> | Decimal | DecimalJsLike | number | string
    price?: DecimalWithAggregatesFilter<"Deal"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"Deal"> | number
    startDate?: DateTimeWithAggregatesFilter<"Deal"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"Deal"> | Date | string
    salonId?: IntWithAggregatesFilter<"Deal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Deal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deal"> | Date | string
    durationMinutes?: IntWithAggregatesFilter<"Deal"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Deal"> | string | null
  }

  export type WaitingListWhereInput = {
    AND?: WaitingListWhereInput | WaitingListWhereInput[]
    OR?: WaitingListWhereInput[]
    NOT?: WaitingListWhereInput | WaitingListWhereInput[]
    id?: IntFilter<"WaitingList"> | number
    email?: StringFilter<"WaitingList"> | string
    createdAt?: DateTimeFilter<"WaitingList"> | Date | string
  }

  export type WaitingListOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type WaitingListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: WaitingListWhereInput | WaitingListWhereInput[]
    OR?: WaitingListWhereInput[]
    NOT?: WaitingListWhereInput | WaitingListWhereInput[]
    createdAt?: DateTimeFilter<"WaitingList"> | Date | string
  }, "id" | "email">

  export type WaitingListOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: WaitingListCountOrderByAggregateInput
    _avg?: WaitingListAvgOrderByAggregateInput
    _max?: WaitingListMaxOrderByAggregateInput
    _min?: WaitingListMinOrderByAggregateInput
    _sum?: WaitingListSumOrderByAggregateInput
  }

  export type WaitingListScalarWhereWithAggregatesInput = {
    AND?: WaitingListScalarWhereWithAggregatesInput | WaitingListScalarWhereWithAggregatesInput[]
    OR?: WaitingListScalarWhereWithAggregatesInput[]
    NOT?: WaitingListScalarWhereWithAggregatesInput | WaitingListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WaitingList"> | number
    email?: StringWithAggregatesFilter<"WaitingList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WaitingList"> | Date | string
  }

  export type SalonImageWhereInput = {
    AND?: SalonImageWhereInput | SalonImageWhereInput[]
    OR?: SalonImageWhereInput[]
    NOT?: SalonImageWhereInput | SalonImageWhereInput[]
    id?: IntFilter<"SalonImage"> | number
    salonId?: IntFilter<"SalonImage"> | number
    url?: StringFilter<"SalonImage"> | string
    fileName?: StringNullableFilter<"SalonImage"> | string | null
    createdAt?: DateTimeFilter<"SalonImage"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
  }

  export type SalonImageOrderByWithRelationInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    fileName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
  }

  export type SalonImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalonImageWhereInput | SalonImageWhereInput[]
    OR?: SalonImageWhereInput[]
    NOT?: SalonImageWhereInput | SalonImageWhereInput[]
    salonId?: IntFilter<"SalonImage"> | number
    url?: StringFilter<"SalonImage"> | string
    fileName?: StringNullableFilter<"SalonImage"> | string | null
    createdAt?: DateTimeFilter<"SalonImage"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
  }, "id">

  export type SalonImageOrderByWithAggregationInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    fileName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SalonImageCountOrderByAggregateInput
    _avg?: SalonImageAvgOrderByAggregateInput
    _max?: SalonImageMaxOrderByAggregateInput
    _min?: SalonImageMinOrderByAggregateInput
    _sum?: SalonImageSumOrderByAggregateInput
  }

  export type SalonImageScalarWhereWithAggregatesInput = {
    AND?: SalonImageScalarWhereWithAggregatesInput | SalonImageScalarWhereWithAggregatesInput[]
    OR?: SalonImageScalarWhereWithAggregatesInput[]
    NOT?: SalonImageScalarWhereWithAggregatesInput | SalonImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalonImage"> | number
    salonId?: IntWithAggregatesFilter<"SalonImage"> | number
    url?: StringWithAggregatesFilter<"SalonImage"> | string
    fileName?: StringNullableWithAggregatesFilter<"SalonImage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SalonImage"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringNullableFilter<"Job"> | string | null
    salary?: StringNullableFilter<"Job"> | string | null
    salonId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    applications?: ApplicationListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salon?: SalonOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    description?: StringNullableFilter<"Job"> | string | null
    salary?: StringNullableFilter<"Job"> | string | null
    salonId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    salon?: XOR<SalonScalarRelationFilter, SalonWhereInput>
    applications?: ApplicationListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    title?: StringWithAggregatesFilter<"Job"> | string
    description?: StringNullableWithAggregatesFilter<"Job"> | string | null
    salary?: StringNullableWithAggregatesFilter<"Job"> | string | null
    salonId?: IntWithAggregatesFilter<"Job"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    jobId?: IntFilter<"Application"> | number
    applicantId?: StringFilter<"Application"> | string
    resumeText?: StringNullableFilter<"Application"> | string | null
    linkedInURL?: StringNullableFilter<"Application"> | string | null
    coverLetter?: StringNullableFilter<"Application"> | string | null
    status?: EnumAppStatusFilter<"Application"> | $Enums.AppStatus
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeText?: SortOrderInput | SortOrder
    linkedInURL?: SortOrderInput | SortOrder
    coverLetter?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    job?: JobOrderByWithRelationInput
    applicant?: UserOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    jobId?: IntFilter<"Application"> | number
    applicantId?: StringFilter<"Application"> | string
    resumeText?: StringNullableFilter<"Application"> | string | null
    linkedInURL?: StringNullableFilter<"Application"> | string | null
    coverLetter?: StringNullableFilter<"Application"> | string | null
    status?: EnumAppStatusFilter<"Application"> | $Enums.AppStatus
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeText?: SortOrderInput | SortOrder
    linkedInURL?: SortOrderInput | SortOrder
    coverLetter?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    jobId?: IntWithAggregatesFilter<"Application"> | number
    applicantId?: StringWithAggregatesFilter<"Application"> | string
    resumeText?: StringNullableWithAggregatesFilter<"Application"> | string | null
    linkedInURL?: StringNullableWithAggregatesFilter<"Application"> | string | null
    coverLetter?: StringNullableWithAggregatesFilter<"Application"> | string | null
    status?: EnumAppStatusWithAggregatesFilter<"Application"> | $Enums.AppStatus
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    displayName: string
    phone?: string | null
    profilePicture?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    lastLoginAt?: Date | string | null
    CVR?: string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.RoleName | null
    salons?: SalonCreateNestedManyWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    displayName: string
    phone?: string | null
    profilePicture?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    lastLoginAt?: Date | string | null
    CVR?: string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.RoleName | null
    salons?: SalonUncheckedCreateNestedManyWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CVR?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    salons?: SalonUpdateManyWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CVR?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    salons?: SalonUncheckedUpdateManyWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    displayName: string
    phone?: string | null
    profilePicture?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    lastLoginAt?: Date | string | null
    CVR?: string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.RoleName | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CVR?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CVR?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
  }

  export type SalonCreateInput = {
    salonName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    user: UserCreateNestedOneWithoutSalonsInput
    salonType: SalonTypeCreateNestedOneWithoutSalonsInput
    services?: SalonServiceCreateNestedManyWithoutSalonInput
    images?: SalonImageCreateNestedManyWithoutSalonInput
    deals?: DealCreateNestedManyWithoutSalonInput
    jobs?: JobCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateInput = {
    salonId?: number
    salonName: string
    userId: string
    salonTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    services?: SalonServiceUncheckedCreateNestedManyWithoutSalonInput
    images?: SalonImageUncheckedCreateNestedManyWithoutSalonInput
    deals?: DealUncheckedCreateNestedManyWithoutSalonInput
    jobs?: JobUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonUpdateInput = {
    salonName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSalonsNestedInput
    salonType?: SalonTypeUpdateOneRequiredWithoutSalonsNestedInput
    services?: SalonServiceUpdateManyWithoutSalonNestedInput
    images?: SalonImageUpdateManyWithoutSalonNestedInput
    deals?: DealUpdateManyWithoutSalonNestedInput
    jobs?: JobUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salonTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    services?: SalonServiceUncheckedUpdateManyWithoutSalonNestedInput
    images?: SalonImageUncheckedUpdateManyWithoutSalonNestedInput
    deals?: DealUncheckedUpdateManyWithoutSalonNestedInput
    jobs?: JobUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonCreateManyInput = {
    salonId?: number
    salonName: string
    userId: string
    salonTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
  }

  export type SalonUpdateManyMutationInput = {
    salonName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalonUncheckedUpdateManyInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salonTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalonTypeCreateInput = {
    name: string
    salons?: SalonCreateNestedManyWithoutSalonTypeInput
  }

  export type SalonTypeUncheckedCreateInput = {
    id?: number
    name: string
    salons?: SalonUncheckedCreateNestedManyWithoutSalonTypeInput
  }

  export type SalonTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    salons?: SalonUpdateManyWithoutSalonTypeNestedInput
  }

  export type SalonTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    salons?: SalonUncheckedUpdateManyWithoutSalonTypeNestedInput
  }

  export type SalonTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type SalonTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SalonTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    name: string
    category: string
    salons?: SalonServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    category: string
    salons?: SalonServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    salons?: SalonServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    salons?: SalonServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    category: string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SalonServiceCreateInput = {
    salon: SalonCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutSalonsInput
  }

  export type SalonServiceUncheckedCreateInput = {
    id?: number
    salonId: number
    serviceId: number
  }

  export type SalonServiceUpdateInput = {
    salon?: SalonUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutSalonsNestedInput
  }

  export type SalonServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    salonId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type SalonServiceCreateManyInput = {
    id?: number
    salonId: number
    serviceId: number
  }

  export type SalonServiceUpdateManyMutationInput = {

  }

  export type SalonServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    salonId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type DealCreateInput = {
    title: string
    description: string
    originalPrice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    startDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    durationMinutes: number
    imageUrl?: string | null
    salon: SalonCreateNestedOneWithoutDealsInput
  }

  export type DealUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    originalPrice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    startDate: Date | string
    expiryDate: Date | string
    salonId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    durationMinutes: number
    imageUrl?: string | null
  }

  export type DealUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    salon?: SalonUpdateOneRequiredWithoutDealsNestedInput
  }

  export type DealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealCreateManyInput = {
    id?: number
    title: string
    description: string
    originalPrice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    startDate: Date | string
    expiryDate: Date | string
    salonId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    durationMinutes: number
    imageUrl?: string | null
  }

  export type DealUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    salonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaitingListCreateInput = {
    email: string
    createdAt?: Date | string
  }

  export type WaitingListUncheckedCreateInput = {
    id?: number
    email: string
    createdAt?: Date | string
  }

  export type WaitingListUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitingListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitingListCreateManyInput = {
    id?: number
    email: string
    createdAt?: Date | string
  }

  export type WaitingListUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitingListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonImageCreateInput = {
    url: string
    fileName?: string | null
    createdAt?: Date | string
    salon: SalonCreateNestedOneWithoutImagesInput
  }

  export type SalonImageUncheckedCreateInput = {
    id?: number
    salonId: number
    url: string
    fileName?: string | null
    createdAt?: Date | string
  }

  export type SalonImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutImagesNestedInput
  }

  export type SalonImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    salonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonImageCreateManyInput = {
    id?: number
    salonId: number
    url: string
    fileName?: string | null
    createdAt?: Date | string
  }

  export type SalonImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    salonId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    title: string
    description?: string | null
    salary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutJobsInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    salary?: string | null
    salonId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutJobsNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    salonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    salary?: string | null
    salonId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    salonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
    applicant: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    jobId: number
    applicantId: string
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: number
    jobId: number
    applicantId: string
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNameNullableFilter<$PrismaModel> | $Enums.RoleName | null
  }

  export type SalonListRelationFilter = {
    every?: SalonWhereInput
    some?: SalonWhereInput
    none?: SalonWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SalonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    lastLoginAt?: SortOrder
    CVR?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    lastLoginAt?: SortOrder
    CVR?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    lastLoginAt?: SortOrder
    CVR?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.RoleName | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNameNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNameNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SalonTypeScalarRelationFilter = {
    is?: SalonTypeWhereInput
    isNot?: SalonTypeWhereInput
  }

  export type SalonServiceListRelationFilter = {
    every?: SalonServiceWhereInput
    some?: SalonServiceWhereInput
    none?: SalonServiceWhereInput
  }

  export type SalonImageListRelationFilter = {
    every?: SalonImageWhereInput
    some?: SalonImageWhereInput
    none?: SalonImageWhereInput
  }

  export type DealListRelationFilter = {
    every?: DealWhereInput
    some?: DealWhereInput
    none?: DealWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type SalonServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalonImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalonCountOrderByAggregateInput = {
    salonId?: SortOrder
    salonName?: SortOrder
    userId?: SortOrder
    salonTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
  }

  export type SalonAvgOrderByAggregateInput = {
    salonId?: SortOrder
    salonTypeId?: SortOrder
  }

  export type SalonMaxOrderByAggregateInput = {
    salonId?: SortOrder
    salonName?: SortOrder
    userId?: SortOrder
    salonTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
  }

  export type SalonMinOrderByAggregateInput = {
    salonId?: SortOrder
    salonName?: SortOrder
    userId?: SortOrder
    salonTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
  }

  export type SalonSumOrderByAggregateInput = {
    salonId?: SortOrder
    salonTypeId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SalonTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SalonTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SalonTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SalonTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SalonTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SalonScalarRelationFilter = {
    is?: SalonWhereInput
    isNot?: SalonWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type SalonServiceSalonIdServiceIdCompoundUniqueInput = {
    salonId: number
    serviceId: number
  }

  export type SalonServiceCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    serviceId?: SortOrder
  }

  export type SalonServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    serviceId?: SortOrder
  }

  export type SalonServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    serviceId?: SortOrder
  }

  export type SalonServiceMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    serviceId?: SortOrder
  }

  export type SalonServiceSumOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    serviceId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DealCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    originalPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    durationMinutes?: SortOrder
    imageUrl?: SortOrder
  }

  export type DealAvgOrderByAggregateInput = {
    id?: SortOrder
    originalPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    salonId?: SortOrder
    durationMinutes?: SortOrder
  }

  export type DealMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    originalPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    durationMinutes?: SortOrder
    imageUrl?: SortOrder
  }

  export type DealMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    originalPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    durationMinutes?: SortOrder
    imageUrl?: SortOrder
  }

  export type DealSumOrderByAggregateInput = {
    id?: SortOrder
    originalPrice?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    salonId?: SortOrder
    durationMinutes?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type WaitingListCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type WaitingListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WaitingListMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type WaitingListMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type WaitingListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SalonImageCountOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type SalonImageAvgOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
  }

  export type SalonImageMaxOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type SalonImageMinOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type SalonImageSumOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salary?: SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salary?: SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salary?: SortOrder
    salonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
    salonId?: SortOrder
  }

  export type EnumAppStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppStatus | EnumAppStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppStatus[] | ListEnumAppStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppStatus[] | ListEnumAppStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppStatusFilter<$PrismaModel> | $Enums.AppStatus
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeText?: SortOrder
    linkedInURL?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeText?: SortOrder
    linkedInURL?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    resumeText?: SortOrder
    linkedInURL?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
  }

  export type EnumAppStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppStatus | EnumAppStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppStatus[] | ListEnumAppStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppStatus[] | ListEnumAppStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppStatusFilter<$PrismaModel>
    _max?: NestedEnumAppStatusFilter<$PrismaModel>
  }

  export type SalonCreateNestedManyWithoutUserInput = {
    create?: XOR<SalonCreateWithoutUserInput, SalonUncheckedCreateWithoutUserInput> | SalonCreateWithoutUserInput[] | SalonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutUserInput | SalonCreateOrConnectWithoutUserInput[]
    createMany?: SalonCreateManyUserInputEnvelope
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type SalonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SalonCreateWithoutUserInput, SalonUncheckedCreateWithoutUserInput> | SalonCreateWithoutUserInput[] | SalonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutUserInput | SalonCreateOrConnectWithoutUserInput[]
    createMany?: SalonCreateManyUserInputEnvelope
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName | null
  }

  export type SalonUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalonCreateWithoutUserInput, SalonUncheckedCreateWithoutUserInput> | SalonCreateWithoutUserInput[] | SalonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutUserInput | SalonCreateOrConnectWithoutUserInput[]
    upsert?: SalonUpsertWithWhereUniqueWithoutUserInput | SalonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalonCreateManyUserInputEnvelope
    set?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    disconnect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    delete?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    update?: SalonUpdateWithWhereUniqueWithoutUserInput | SalonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalonUpdateManyWithWhereWithoutUserInput | SalonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalonScalarWhereInput | SalonScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type SalonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalonCreateWithoutUserInput, SalonUncheckedCreateWithoutUserInput> | SalonCreateWithoutUserInput[] | SalonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutUserInput | SalonCreateOrConnectWithoutUserInput[]
    upsert?: SalonUpsertWithWhereUniqueWithoutUserInput | SalonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalonCreateManyUserInputEnvelope
    set?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    disconnect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    delete?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    update?: SalonUpdateWithWhereUniqueWithoutUserInput | SalonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalonUpdateManyWithWhereWithoutUserInput | SalonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalonScalarWhereInput | SalonScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSalonsInput = {
    create?: XOR<UserCreateWithoutSalonsInput, UserUncheckedCreateWithoutSalonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalonsInput
    connect?: UserWhereUniqueInput
  }

  export type SalonTypeCreateNestedOneWithoutSalonsInput = {
    create?: XOR<SalonTypeCreateWithoutSalonsInput, SalonTypeUncheckedCreateWithoutSalonsInput>
    connectOrCreate?: SalonTypeCreateOrConnectWithoutSalonsInput
    connect?: SalonTypeWhereUniqueInput
  }

  export type SalonServiceCreateNestedManyWithoutSalonInput = {
    create?: XOR<SalonServiceCreateWithoutSalonInput, SalonServiceUncheckedCreateWithoutSalonInput> | SalonServiceCreateWithoutSalonInput[] | SalonServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonServiceCreateOrConnectWithoutSalonInput | SalonServiceCreateOrConnectWithoutSalonInput[]
    createMany?: SalonServiceCreateManySalonInputEnvelope
    connect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
  }

  export type SalonImageCreateNestedManyWithoutSalonInput = {
    create?: XOR<SalonImageCreateWithoutSalonInput, SalonImageUncheckedCreateWithoutSalonInput> | SalonImageCreateWithoutSalonInput[] | SalonImageUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonImageCreateOrConnectWithoutSalonInput | SalonImageCreateOrConnectWithoutSalonInput[]
    createMany?: SalonImageCreateManySalonInputEnvelope
    connect?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
  }

  export type DealCreateNestedManyWithoutSalonInput = {
    create?: XOR<DealCreateWithoutSalonInput, DealUncheckedCreateWithoutSalonInput> | DealCreateWithoutSalonInput[] | DealUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: DealCreateOrConnectWithoutSalonInput | DealCreateOrConnectWithoutSalonInput[]
    createMany?: DealCreateManySalonInputEnvelope
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutSalonInput = {
    create?: XOR<JobCreateWithoutSalonInput, JobUncheckedCreateWithoutSalonInput> | JobCreateWithoutSalonInput[] | JobUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: JobCreateOrConnectWithoutSalonInput | JobCreateOrConnectWithoutSalonInput[]
    createMany?: JobCreateManySalonInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type SalonServiceUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<SalonServiceCreateWithoutSalonInput, SalonServiceUncheckedCreateWithoutSalonInput> | SalonServiceCreateWithoutSalonInput[] | SalonServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonServiceCreateOrConnectWithoutSalonInput | SalonServiceCreateOrConnectWithoutSalonInput[]
    createMany?: SalonServiceCreateManySalonInputEnvelope
    connect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
  }

  export type SalonImageUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<SalonImageCreateWithoutSalonInput, SalonImageUncheckedCreateWithoutSalonInput> | SalonImageCreateWithoutSalonInput[] | SalonImageUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonImageCreateOrConnectWithoutSalonInput | SalonImageCreateOrConnectWithoutSalonInput[]
    createMany?: SalonImageCreateManySalonInputEnvelope
    connect?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
  }

  export type DealUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<DealCreateWithoutSalonInput, DealUncheckedCreateWithoutSalonInput> | DealCreateWithoutSalonInput[] | DealUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: DealCreateOrConnectWithoutSalonInput | DealCreateOrConnectWithoutSalonInput[]
    createMany?: DealCreateManySalonInputEnvelope
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutSalonInput = {
    create?: XOR<JobCreateWithoutSalonInput, JobUncheckedCreateWithoutSalonInput> | JobCreateWithoutSalonInput[] | JobUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: JobCreateOrConnectWithoutSalonInput | JobCreateOrConnectWithoutSalonInput[]
    createMany?: JobCreateManySalonInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSalonsNestedInput = {
    create?: XOR<UserCreateWithoutSalonsInput, UserUncheckedCreateWithoutSalonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalonsInput
    upsert?: UserUpsertWithoutSalonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalonsInput, UserUpdateWithoutSalonsInput>, UserUncheckedUpdateWithoutSalonsInput>
  }

  export type SalonTypeUpdateOneRequiredWithoutSalonsNestedInput = {
    create?: XOR<SalonTypeCreateWithoutSalonsInput, SalonTypeUncheckedCreateWithoutSalonsInput>
    connectOrCreate?: SalonTypeCreateOrConnectWithoutSalonsInput
    upsert?: SalonTypeUpsertWithoutSalonsInput
    connect?: SalonTypeWhereUniqueInput
    update?: XOR<XOR<SalonTypeUpdateToOneWithWhereWithoutSalonsInput, SalonTypeUpdateWithoutSalonsInput>, SalonTypeUncheckedUpdateWithoutSalonsInput>
  }

  export type SalonServiceUpdateManyWithoutSalonNestedInput = {
    create?: XOR<SalonServiceCreateWithoutSalonInput, SalonServiceUncheckedCreateWithoutSalonInput> | SalonServiceCreateWithoutSalonInput[] | SalonServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonServiceCreateOrConnectWithoutSalonInput | SalonServiceCreateOrConnectWithoutSalonInput[]
    upsert?: SalonServiceUpsertWithWhereUniqueWithoutSalonInput | SalonServiceUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: SalonServiceCreateManySalonInputEnvelope
    set?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    disconnect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    delete?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    connect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    update?: SalonServiceUpdateWithWhereUniqueWithoutSalonInput | SalonServiceUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: SalonServiceUpdateManyWithWhereWithoutSalonInput | SalonServiceUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: SalonServiceScalarWhereInput | SalonServiceScalarWhereInput[]
  }

  export type SalonImageUpdateManyWithoutSalonNestedInput = {
    create?: XOR<SalonImageCreateWithoutSalonInput, SalonImageUncheckedCreateWithoutSalonInput> | SalonImageCreateWithoutSalonInput[] | SalonImageUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonImageCreateOrConnectWithoutSalonInput | SalonImageCreateOrConnectWithoutSalonInput[]
    upsert?: SalonImageUpsertWithWhereUniqueWithoutSalonInput | SalonImageUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: SalonImageCreateManySalonInputEnvelope
    set?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
    disconnect?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
    delete?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
    connect?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
    update?: SalonImageUpdateWithWhereUniqueWithoutSalonInput | SalonImageUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: SalonImageUpdateManyWithWhereWithoutSalonInput | SalonImageUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: SalonImageScalarWhereInput | SalonImageScalarWhereInput[]
  }

  export type DealUpdateManyWithoutSalonNestedInput = {
    create?: XOR<DealCreateWithoutSalonInput, DealUncheckedCreateWithoutSalonInput> | DealCreateWithoutSalonInput[] | DealUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: DealCreateOrConnectWithoutSalonInput | DealCreateOrConnectWithoutSalonInput[]
    upsert?: DealUpsertWithWhereUniqueWithoutSalonInput | DealUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: DealCreateManySalonInputEnvelope
    set?: DealWhereUniqueInput | DealWhereUniqueInput[]
    disconnect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    delete?: DealWhereUniqueInput | DealWhereUniqueInput[]
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    update?: DealUpdateWithWhereUniqueWithoutSalonInput | DealUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: DealUpdateManyWithWhereWithoutSalonInput | DealUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: DealScalarWhereInput | DealScalarWhereInput[]
  }

  export type JobUpdateManyWithoutSalonNestedInput = {
    create?: XOR<JobCreateWithoutSalonInput, JobUncheckedCreateWithoutSalonInput> | JobCreateWithoutSalonInput[] | JobUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: JobCreateOrConnectWithoutSalonInput | JobCreateOrConnectWithoutSalonInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutSalonInput | JobUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: JobCreateManySalonInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutSalonInput | JobUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: JobUpdateManyWithWhereWithoutSalonInput | JobUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalonServiceUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<SalonServiceCreateWithoutSalonInput, SalonServiceUncheckedCreateWithoutSalonInput> | SalonServiceCreateWithoutSalonInput[] | SalonServiceUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonServiceCreateOrConnectWithoutSalonInput | SalonServiceCreateOrConnectWithoutSalonInput[]
    upsert?: SalonServiceUpsertWithWhereUniqueWithoutSalonInput | SalonServiceUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: SalonServiceCreateManySalonInputEnvelope
    set?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    disconnect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    delete?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    connect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    update?: SalonServiceUpdateWithWhereUniqueWithoutSalonInput | SalonServiceUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: SalonServiceUpdateManyWithWhereWithoutSalonInput | SalonServiceUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: SalonServiceScalarWhereInput | SalonServiceScalarWhereInput[]
  }

  export type SalonImageUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<SalonImageCreateWithoutSalonInput, SalonImageUncheckedCreateWithoutSalonInput> | SalonImageCreateWithoutSalonInput[] | SalonImageUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: SalonImageCreateOrConnectWithoutSalonInput | SalonImageCreateOrConnectWithoutSalonInput[]
    upsert?: SalonImageUpsertWithWhereUniqueWithoutSalonInput | SalonImageUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: SalonImageCreateManySalonInputEnvelope
    set?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
    disconnect?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
    delete?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
    connect?: SalonImageWhereUniqueInput | SalonImageWhereUniqueInput[]
    update?: SalonImageUpdateWithWhereUniqueWithoutSalonInput | SalonImageUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: SalonImageUpdateManyWithWhereWithoutSalonInput | SalonImageUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: SalonImageScalarWhereInput | SalonImageScalarWhereInput[]
  }

  export type DealUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<DealCreateWithoutSalonInput, DealUncheckedCreateWithoutSalonInput> | DealCreateWithoutSalonInput[] | DealUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: DealCreateOrConnectWithoutSalonInput | DealCreateOrConnectWithoutSalonInput[]
    upsert?: DealUpsertWithWhereUniqueWithoutSalonInput | DealUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: DealCreateManySalonInputEnvelope
    set?: DealWhereUniqueInput | DealWhereUniqueInput[]
    disconnect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    delete?: DealWhereUniqueInput | DealWhereUniqueInput[]
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    update?: DealUpdateWithWhereUniqueWithoutSalonInput | DealUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: DealUpdateManyWithWhereWithoutSalonInput | DealUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: DealScalarWhereInput | DealScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutSalonNestedInput = {
    create?: XOR<JobCreateWithoutSalonInput, JobUncheckedCreateWithoutSalonInput> | JobCreateWithoutSalonInput[] | JobUncheckedCreateWithoutSalonInput[]
    connectOrCreate?: JobCreateOrConnectWithoutSalonInput | JobCreateOrConnectWithoutSalonInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutSalonInput | JobUpsertWithWhereUniqueWithoutSalonInput[]
    createMany?: JobCreateManySalonInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutSalonInput | JobUpdateWithWhereUniqueWithoutSalonInput[]
    updateMany?: JobUpdateManyWithWhereWithoutSalonInput | JobUpdateManyWithWhereWithoutSalonInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type SalonCreateNestedManyWithoutSalonTypeInput = {
    create?: XOR<SalonCreateWithoutSalonTypeInput, SalonUncheckedCreateWithoutSalonTypeInput> | SalonCreateWithoutSalonTypeInput[] | SalonUncheckedCreateWithoutSalonTypeInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutSalonTypeInput | SalonCreateOrConnectWithoutSalonTypeInput[]
    createMany?: SalonCreateManySalonTypeInputEnvelope
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
  }

  export type SalonUncheckedCreateNestedManyWithoutSalonTypeInput = {
    create?: XOR<SalonCreateWithoutSalonTypeInput, SalonUncheckedCreateWithoutSalonTypeInput> | SalonCreateWithoutSalonTypeInput[] | SalonUncheckedCreateWithoutSalonTypeInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutSalonTypeInput | SalonCreateOrConnectWithoutSalonTypeInput[]
    createMany?: SalonCreateManySalonTypeInputEnvelope
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
  }

  export type SalonUpdateManyWithoutSalonTypeNestedInput = {
    create?: XOR<SalonCreateWithoutSalonTypeInput, SalonUncheckedCreateWithoutSalonTypeInput> | SalonCreateWithoutSalonTypeInput[] | SalonUncheckedCreateWithoutSalonTypeInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutSalonTypeInput | SalonCreateOrConnectWithoutSalonTypeInput[]
    upsert?: SalonUpsertWithWhereUniqueWithoutSalonTypeInput | SalonUpsertWithWhereUniqueWithoutSalonTypeInput[]
    createMany?: SalonCreateManySalonTypeInputEnvelope
    set?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    disconnect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    delete?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    update?: SalonUpdateWithWhereUniqueWithoutSalonTypeInput | SalonUpdateWithWhereUniqueWithoutSalonTypeInput[]
    updateMany?: SalonUpdateManyWithWhereWithoutSalonTypeInput | SalonUpdateManyWithWhereWithoutSalonTypeInput[]
    deleteMany?: SalonScalarWhereInput | SalonScalarWhereInput[]
  }

  export type SalonUncheckedUpdateManyWithoutSalonTypeNestedInput = {
    create?: XOR<SalonCreateWithoutSalonTypeInput, SalonUncheckedCreateWithoutSalonTypeInput> | SalonCreateWithoutSalonTypeInput[] | SalonUncheckedCreateWithoutSalonTypeInput[]
    connectOrCreate?: SalonCreateOrConnectWithoutSalonTypeInput | SalonCreateOrConnectWithoutSalonTypeInput[]
    upsert?: SalonUpsertWithWhereUniqueWithoutSalonTypeInput | SalonUpsertWithWhereUniqueWithoutSalonTypeInput[]
    createMany?: SalonCreateManySalonTypeInputEnvelope
    set?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    disconnect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    delete?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    connect?: SalonWhereUniqueInput | SalonWhereUniqueInput[]
    update?: SalonUpdateWithWhereUniqueWithoutSalonTypeInput | SalonUpdateWithWhereUniqueWithoutSalonTypeInput[]
    updateMany?: SalonUpdateManyWithWhereWithoutSalonTypeInput | SalonUpdateManyWithWhereWithoutSalonTypeInput[]
    deleteMany?: SalonScalarWhereInput | SalonScalarWhereInput[]
  }

  export type SalonServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<SalonServiceCreateWithoutServiceInput, SalonServiceUncheckedCreateWithoutServiceInput> | SalonServiceCreateWithoutServiceInput[] | SalonServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SalonServiceCreateOrConnectWithoutServiceInput | SalonServiceCreateOrConnectWithoutServiceInput[]
    createMany?: SalonServiceCreateManyServiceInputEnvelope
    connect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
  }

  export type SalonServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<SalonServiceCreateWithoutServiceInput, SalonServiceUncheckedCreateWithoutServiceInput> | SalonServiceCreateWithoutServiceInput[] | SalonServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SalonServiceCreateOrConnectWithoutServiceInput | SalonServiceCreateOrConnectWithoutServiceInput[]
    createMany?: SalonServiceCreateManyServiceInputEnvelope
    connect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
  }

  export type SalonServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<SalonServiceCreateWithoutServiceInput, SalonServiceUncheckedCreateWithoutServiceInput> | SalonServiceCreateWithoutServiceInput[] | SalonServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SalonServiceCreateOrConnectWithoutServiceInput | SalonServiceCreateOrConnectWithoutServiceInput[]
    upsert?: SalonServiceUpsertWithWhereUniqueWithoutServiceInput | SalonServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: SalonServiceCreateManyServiceInputEnvelope
    set?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    disconnect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    delete?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    connect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    update?: SalonServiceUpdateWithWhereUniqueWithoutServiceInput | SalonServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: SalonServiceUpdateManyWithWhereWithoutServiceInput | SalonServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: SalonServiceScalarWhereInput | SalonServiceScalarWhereInput[]
  }

  export type SalonServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<SalonServiceCreateWithoutServiceInput, SalonServiceUncheckedCreateWithoutServiceInput> | SalonServiceCreateWithoutServiceInput[] | SalonServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SalonServiceCreateOrConnectWithoutServiceInput | SalonServiceCreateOrConnectWithoutServiceInput[]
    upsert?: SalonServiceUpsertWithWhereUniqueWithoutServiceInput | SalonServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: SalonServiceCreateManyServiceInputEnvelope
    set?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    disconnect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    delete?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    connect?: SalonServiceWhereUniqueInput | SalonServiceWhereUniqueInput[]
    update?: SalonServiceUpdateWithWhereUniqueWithoutServiceInput | SalonServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: SalonServiceUpdateManyWithWhereWithoutServiceInput | SalonServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: SalonServiceScalarWhereInput | SalonServiceScalarWhereInput[]
  }

  export type SalonCreateNestedOneWithoutServicesInput = {
    create?: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutServicesInput
    connect?: SalonWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutSalonsInput = {
    create?: XOR<ServiceCreateWithoutSalonsInput, ServiceUncheckedCreateWithoutSalonsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonsInput
    connect?: ServiceWhereUniqueInput
  }

  export type SalonUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutServicesInput
    upsert?: SalonUpsertWithoutServicesInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutServicesInput, SalonUpdateWithoutServicesInput>, SalonUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutSalonsNestedInput = {
    create?: XOR<ServiceCreateWithoutSalonsInput, ServiceUncheckedCreateWithoutSalonsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutSalonsInput
    upsert?: ServiceUpsertWithoutSalonsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutSalonsInput, ServiceUpdateWithoutSalonsInput>, ServiceUncheckedUpdateWithoutSalonsInput>
  }

  export type SalonCreateNestedOneWithoutDealsInput = {
    create?: XOR<SalonCreateWithoutDealsInput, SalonUncheckedCreateWithoutDealsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutDealsInput
    connect?: SalonWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SalonUpdateOneRequiredWithoutDealsNestedInput = {
    create?: XOR<SalonCreateWithoutDealsInput, SalonUncheckedCreateWithoutDealsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutDealsInput
    upsert?: SalonUpsertWithoutDealsInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutDealsInput, SalonUpdateWithoutDealsInput>, SalonUncheckedUpdateWithoutDealsInput>
  }

  export type SalonCreateNestedOneWithoutImagesInput = {
    create?: XOR<SalonCreateWithoutImagesInput, SalonUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutImagesInput
    connect?: SalonWhereUniqueInput
  }

  export type SalonUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<SalonCreateWithoutImagesInput, SalonUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SalonCreateOrConnectWithoutImagesInput
    upsert?: SalonUpsertWithoutImagesInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutImagesInput, SalonUpdateWithoutImagesInput>, SalonUncheckedUpdateWithoutImagesInput>
  }

  export type SalonCreateNestedOneWithoutJobsInput = {
    create?: XOR<SalonCreateWithoutJobsInput, SalonUncheckedCreateWithoutJobsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutJobsInput
    connect?: SalonWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type SalonUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<SalonCreateWithoutJobsInput, SalonUncheckedCreateWithoutJobsInput>
    connectOrCreate?: SalonCreateOrConnectWithoutJobsInput
    upsert?: SalonUpsertWithoutJobsInput
    connect?: SalonWhereUniqueInput
    update?: XOR<XOR<SalonUpdateToOneWithWhereWithoutJobsInput, SalonUpdateWithoutJobsInput>, SalonUncheckedUpdateWithoutJobsInput>
  }

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAppStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppStatus
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleNameNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNameNullableFilter<$PrismaModel> | $Enums.RoleName | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleNameNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel> | null
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNameNullableWithAggregatesFilter<$PrismaModel> | $Enums.RoleName | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNameNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNameNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAppStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppStatus | EnumAppStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppStatus[] | ListEnumAppStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppStatus[] | ListEnumAppStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppStatusFilter<$PrismaModel> | $Enums.AppStatus
  }

  export type NestedEnumAppStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppStatus | EnumAppStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppStatus[] | ListEnumAppStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppStatus[] | ListEnumAppStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppStatusFilter<$PrismaModel>
    _max?: NestedEnumAppStatusFilter<$PrismaModel>
  }

  export type SalonCreateWithoutUserInput = {
    salonName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    salonType: SalonTypeCreateNestedOneWithoutSalonsInput
    services?: SalonServiceCreateNestedManyWithoutSalonInput
    images?: SalonImageCreateNestedManyWithoutSalonInput
    deals?: DealCreateNestedManyWithoutSalonInput
    jobs?: JobCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutUserInput = {
    salonId?: number
    salonName: string
    salonTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    services?: SalonServiceUncheckedCreateNestedManyWithoutSalonInput
    images?: SalonImageUncheckedCreateNestedManyWithoutSalonInput
    deals?: DealUncheckedCreateNestedManyWithoutSalonInput
    jobs?: JobUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutUserInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutUserInput, SalonUncheckedCreateWithoutUserInput>
  }

  export type SalonCreateManyUserInputEnvelope = {
    data: SalonCreateManyUserInput | SalonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutApplicantInput = {
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: number
    jobId: number
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithWhereUniqueWithoutUserInput = {
    where: SalonWhereUniqueInput
    update: XOR<SalonUpdateWithoutUserInput, SalonUncheckedUpdateWithoutUserInput>
    create: XOR<SalonCreateWithoutUserInput, SalonUncheckedCreateWithoutUserInput>
  }

  export type SalonUpdateWithWhereUniqueWithoutUserInput = {
    where: SalonWhereUniqueInput
    data: XOR<SalonUpdateWithoutUserInput, SalonUncheckedUpdateWithoutUserInput>
  }

  export type SalonUpdateManyWithWhereWithoutUserInput = {
    where: SalonScalarWhereInput
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyWithoutUserInput>
  }

  export type SalonScalarWhereInput = {
    AND?: SalonScalarWhereInput | SalonScalarWhereInput[]
    OR?: SalonScalarWhereInput[]
    NOT?: SalonScalarWhereInput | SalonScalarWhereInput[]
    salonId?: IntFilter<"Salon"> | number
    salonName?: StringFilter<"Salon"> | string
    userId?: StringFilter<"Salon"> | string
    salonTypeId?: IntFilter<"Salon"> | number
    createdAt?: DateTimeFilter<"Salon"> | Date | string
    updatedAt?: DateTimeFilter<"Salon"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Salon"> | Date | string | null
    address?: StringNullableFilter<"Salon"> | string | null
    city?: StringNullableFilter<"Salon"> | string | null
    zipCode?: StringNullableFilter<"Salon"> | string | null
    country?: StringNullableFilter<"Salon"> | string | null
    phone?: StringNullableFilter<"Salon"> | string | null
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: IntFilter<"Application"> | number
    jobId?: IntFilter<"Application"> | number
    applicantId?: StringFilter<"Application"> | string
    resumeText?: StringNullableFilter<"Application"> | string | null
    linkedInURL?: StringNullableFilter<"Application"> | string | null
    coverLetter?: StringNullableFilter<"Application"> | string | null
    status?: EnumAppStatusFilter<"Application"> | $Enums.AppStatus
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type UserCreateWithoutSalonsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    phone?: string | null
    profilePicture?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    lastLoginAt?: Date | string | null
    CVR?: string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.RoleName | null
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
  }

  export type UserUncheckedCreateWithoutSalonsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    phone?: string | null
    profilePicture?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    lastLoginAt?: Date | string | null
    CVR?: string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.RoleName | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type UserCreateOrConnectWithoutSalonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalonsInput, UserUncheckedCreateWithoutSalonsInput>
  }

  export type SalonTypeCreateWithoutSalonsInput = {
    name: string
  }

  export type SalonTypeUncheckedCreateWithoutSalonsInput = {
    id?: number
    name: string
  }

  export type SalonTypeCreateOrConnectWithoutSalonsInput = {
    where: SalonTypeWhereUniqueInput
    create: XOR<SalonTypeCreateWithoutSalonsInput, SalonTypeUncheckedCreateWithoutSalonsInput>
  }

  export type SalonServiceCreateWithoutSalonInput = {
    service: ServiceCreateNestedOneWithoutSalonsInput
  }

  export type SalonServiceUncheckedCreateWithoutSalonInput = {
    id?: number
    serviceId: number
  }

  export type SalonServiceCreateOrConnectWithoutSalonInput = {
    where: SalonServiceWhereUniqueInput
    create: XOR<SalonServiceCreateWithoutSalonInput, SalonServiceUncheckedCreateWithoutSalonInput>
  }

  export type SalonServiceCreateManySalonInputEnvelope = {
    data: SalonServiceCreateManySalonInput | SalonServiceCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type SalonImageCreateWithoutSalonInput = {
    url: string
    fileName?: string | null
    createdAt?: Date | string
  }

  export type SalonImageUncheckedCreateWithoutSalonInput = {
    id?: number
    url: string
    fileName?: string | null
    createdAt?: Date | string
  }

  export type SalonImageCreateOrConnectWithoutSalonInput = {
    where: SalonImageWhereUniqueInput
    create: XOR<SalonImageCreateWithoutSalonInput, SalonImageUncheckedCreateWithoutSalonInput>
  }

  export type SalonImageCreateManySalonInputEnvelope = {
    data: SalonImageCreateManySalonInput | SalonImageCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type DealCreateWithoutSalonInput = {
    title: string
    description: string
    originalPrice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    startDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    durationMinutes: number
    imageUrl?: string | null
  }

  export type DealUncheckedCreateWithoutSalonInput = {
    id?: number
    title: string
    description: string
    originalPrice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    startDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    durationMinutes: number
    imageUrl?: string | null
  }

  export type DealCreateOrConnectWithoutSalonInput = {
    where: DealWhereUniqueInput
    create: XOR<DealCreateWithoutSalonInput, DealUncheckedCreateWithoutSalonInput>
  }

  export type DealCreateManySalonInputEnvelope = {
    data: DealCreateManySalonInput | DealCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type JobCreateWithoutSalonInput = {
    title: string
    description?: string | null
    salary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutSalonInput = {
    id?: number
    title: string
    description?: string | null
    salary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutSalonInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutSalonInput, JobUncheckedCreateWithoutSalonInput>
  }

  export type JobCreateManySalonInputEnvelope = {
    data: JobCreateManySalonInput | JobCreateManySalonInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSalonsInput = {
    update: XOR<UserUpdateWithoutSalonsInput, UserUncheckedUpdateWithoutSalonsInput>
    create: XOR<UserCreateWithoutSalonsInput, UserUncheckedCreateWithoutSalonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalonsInput, UserUncheckedUpdateWithoutSalonsInput>
  }

  export type UserUpdateWithoutSalonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CVR?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
  }

  export type UserUncheckedUpdateWithoutSalonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CVR?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type SalonTypeUpsertWithoutSalonsInput = {
    update: XOR<SalonTypeUpdateWithoutSalonsInput, SalonTypeUncheckedUpdateWithoutSalonsInput>
    create: XOR<SalonTypeCreateWithoutSalonsInput, SalonTypeUncheckedCreateWithoutSalonsInput>
    where?: SalonTypeWhereInput
  }

  export type SalonTypeUpdateToOneWithWhereWithoutSalonsInput = {
    where?: SalonTypeWhereInput
    data: XOR<SalonTypeUpdateWithoutSalonsInput, SalonTypeUncheckedUpdateWithoutSalonsInput>
  }

  export type SalonTypeUpdateWithoutSalonsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SalonTypeUncheckedUpdateWithoutSalonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SalonServiceUpsertWithWhereUniqueWithoutSalonInput = {
    where: SalonServiceWhereUniqueInput
    update: XOR<SalonServiceUpdateWithoutSalonInput, SalonServiceUncheckedUpdateWithoutSalonInput>
    create: XOR<SalonServiceCreateWithoutSalonInput, SalonServiceUncheckedCreateWithoutSalonInput>
  }

  export type SalonServiceUpdateWithWhereUniqueWithoutSalonInput = {
    where: SalonServiceWhereUniqueInput
    data: XOR<SalonServiceUpdateWithoutSalonInput, SalonServiceUncheckedUpdateWithoutSalonInput>
  }

  export type SalonServiceUpdateManyWithWhereWithoutSalonInput = {
    where: SalonServiceScalarWhereInput
    data: XOR<SalonServiceUpdateManyMutationInput, SalonServiceUncheckedUpdateManyWithoutSalonInput>
  }

  export type SalonServiceScalarWhereInput = {
    AND?: SalonServiceScalarWhereInput | SalonServiceScalarWhereInput[]
    OR?: SalonServiceScalarWhereInput[]
    NOT?: SalonServiceScalarWhereInput | SalonServiceScalarWhereInput[]
    id?: IntFilter<"SalonService"> | number
    salonId?: IntFilter<"SalonService"> | number
    serviceId?: IntFilter<"SalonService"> | number
  }

  export type SalonImageUpsertWithWhereUniqueWithoutSalonInput = {
    where: SalonImageWhereUniqueInput
    update: XOR<SalonImageUpdateWithoutSalonInput, SalonImageUncheckedUpdateWithoutSalonInput>
    create: XOR<SalonImageCreateWithoutSalonInput, SalonImageUncheckedCreateWithoutSalonInput>
  }

  export type SalonImageUpdateWithWhereUniqueWithoutSalonInput = {
    where: SalonImageWhereUniqueInput
    data: XOR<SalonImageUpdateWithoutSalonInput, SalonImageUncheckedUpdateWithoutSalonInput>
  }

  export type SalonImageUpdateManyWithWhereWithoutSalonInput = {
    where: SalonImageScalarWhereInput
    data: XOR<SalonImageUpdateManyMutationInput, SalonImageUncheckedUpdateManyWithoutSalonInput>
  }

  export type SalonImageScalarWhereInput = {
    AND?: SalonImageScalarWhereInput | SalonImageScalarWhereInput[]
    OR?: SalonImageScalarWhereInput[]
    NOT?: SalonImageScalarWhereInput | SalonImageScalarWhereInput[]
    id?: IntFilter<"SalonImage"> | number
    salonId?: IntFilter<"SalonImage"> | number
    url?: StringFilter<"SalonImage"> | string
    fileName?: StringNullableFilter<"SalonImage"> | string | null
    createdAt?: DateTimeFilter<"SalonImage"> | Date | string
  }

  export type DealUpsertWithWhereUniqueWithoutSalonInput = {
    where: DealWhereUniqueInput
    update: XOR<DealUpdateWithoutSalonInput, DealUncheckedUpdateWithoutSalonInput>
    create: XOR<DealCreateWithoutSalonInput, DealUncheckedCreateWithoutSalonInput>
  }

  export type DealUpdateWithWhereUniqueWithoutSalonInput = {
    where: DealWhereUniqueInput
    data: XOR<DealUpdateWithoutSalonInput, DealUncheckedUpdateWithoutSalonInput>
  }

  export type DealUpdateManyWithWhereWithoutSalonInput = {
    where: DealScalarWhereInput
    data: XOR<DealUpdateManyMutationInput, DealUncheckedUpdateManyWithoutSalonInput>
  }

  export type DealScalarWhereInput = {
    AND?: DealScalarWhereInput | DealScalarWhereInput[]
    OR?: DealScalarWhereInput[]
    NOT?: DealScalarWhereInput | DealScalarWhereInput[]
    id?: IntFilter<"Deal"> | number
    title?: StringFilter<"Deal"> | string
    description?: StringFilter<"Deal"> | string
    originalPrice?: DecimalFilter<"Deal"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Deal"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"Deal"> | number
    startDate?: DateTimeFilter<"Deal"> | Date | string
    expiryDate?: DateTimeFilter<"Deal"> | Date | string
    salonId?: IntFilter<"Deal"> | number
    createdAt?: DateTimeFilter<"Deal"> | Date | string
    updatedAt?: DateTimeFilter<"Deal"> | Date | string
    durationMinutes?: IntFilter<"Deal"> | number
    imageUrl?: StringNullableFilter<"Deal"> | string | null
  }

  export type JobUpsertWithWhereUniqueWithoutSalonInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutSalonInput, JobUncheckedUpdateWithoutSalonInput>
    create: XOR<JobCreateWithoutSalonInput, JobUncheckedCreateWithoutSalonInput>
  }

  export type JobUpdateWithWhereUniqueWithoutSalonInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutSalonInput, JobUncheckedUpdateWithoutSalonInput>
  }

  export type JobUpdateManyWithWhereWithoutSalonInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutSalonInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringNullableFilter<"Job"> | string | null
    salary?: StringNullableFilter<"Job"> | string | null
    salonId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type SalonCreateWithoutSalonTypeInput = {
    salonName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    user: UserCreateNestedOneWithoutSalonsInput
    services?: SalonServiceCreateNestedManyWithoutSalonInput
    images?: SalonImageCreateNestedManyWithoutSalonInput
    deals?: DealCreateNestedManyWithoutSalonInput
    jobs?: JobCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutSalonTypeInput = {
    salonId?: number
    salonName: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    services?: SalonServiceUncheckedCreateNestedManyWithoutSalonInput
    images?: SalonImageUncheckedCreateNestedManyWithoutSalonInput
    deals?: DealUncheckedCreateNestedManyWithoutSalonInput
    jobs?: JobUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutSalonTypeInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutSalonTypeInput, SalonUncheckedCreateWithoutSalonTypeInput>
  }

  export type SalonCreateManySalonTypeInputEnvelope = {
    data: SalonCreateManySalonTypeInput | SalonCreateManySalonTypeInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithWhereUniqueWithoutSalonTypeInput = {
    where: SalonWhereUniqueInput
    update: XOR<SalonUpdateWithoutSalonTypeInput, SalonUncheckedUpdateWithoutSalonTypeInput>
    create: XOR<SalonCreateWithoutSalonTypeInput, SalonUncheckedCreateWithoutSalonTypeInput>
  }

  export type SalonUpdateWithWhereUniqueWithoutSalonTypeInput = {
    where: SalonWhereUniqueInput
    data: XOR<SalonUpdateWithoutSalonTypeInput, SalonUncheckedUpdateWithoutSalonTypeInput>
  }

  export type SalonUpdateManyWithWhereWithoutSalonTypeInput = {
    where: SalonScalarWhereInput
    data: XOR<SalonUpdateManyMutationInput, SalonUncheckedUpdateManyWithoutSalonTypeInput>
  }

  export type SalonServiceCreateWithoutServiceInput = {
    salon: SalonCreateNestedOneWithoutServicesInput
  }

  export type SalonServiceUncheckedCreateWithoutServiceInput = {
    id?: number
    salonId: number
  }

  export type SalonServiceCreateOrConnectWithoutServiceInput = {
    where: SalonServiceWhereUniqueInput
    create: XOR<SalonServiceCreateWithoutServiceInput, SalonServiceUncheckedCreateWithoutServiceInput>
  }

  export type SalonServiceCreateManyServiceInputEnvelope = {
    data: SalonServiceCreateManyServiceInput | SalonServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type SalonServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: SalonServiceWhereUniqueInput
    update: XOR<SalonServiceUpdateWithoutServiceInput, SalonServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<SalonServiceCreateWithoutServiceInput, SalonServiceUncheckedCreateWithoutServiceInput>
  }

  export type SalonServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: SalonServiceWhereUniqueInput
    data: XOR<SalonServiceUpdateWithoutServiceInput, SalonServiceUncheckedUpdateWithoutServiceInput>
  }

  export type SalonServiceUpdateManyWithWhereWithoutServiceInput = {
    where: SalonServiceScalarWhereInput
    data: XOR<SalonServiceUpdateManyMutationInput, SalonServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type SalonCreateWithoutServicesInput = {
    salonName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    user: UserCreateNestedOneWithoutSalonsInput
    salonType: SalonTypeCreateNestedOneWithoutSalonsInput
    images?: SalonImageCreateNestedManyWithoutSalonInput
    deals?: DealCreateNestedManyWithoutSalonInput
    jobs?: JobCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutServicesInput = {
    salonId?: number
    salonName: string
    userId: string
    salonTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    images?: SalonImageUncheckedCreateNestedManyWithoutSalonInput
    deals?: DealUncheckedCreateNestedManyWithoutSalonInput
    jobs?: JobUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutServicesInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutSalonsInput = {
    name: string
    category: string
  }

  export type ServiceUncheckedCreateWithoutSalonsInput = {
    id?: number
    name: string
    category: string
  }

  export type ServiceCreateOrConnectWithoutSalonsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSalonsInput, ServiceUncheckedCreateWithoutSalonsInput>
  }

  export type SalonUpsertWithoutServicesInput = {
    update: XOR<SalonUpdateWithoutServicesInput, SalonUncheckedUpdateWithoutServicesInput>
    create: XOR<SalonCreateWithoutServicesInput, SalonUncheckedCreateWithoutServicesInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutServicesInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutServicesInput, SalonUncheckedUpdateWithoutServicesInput>
  }

  export type SalonUpdateWithoutServicesInput = {
    salonName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSalonsNestedInput
    salonType?: SalonTypeUpdateOneRequiredWithoutSalonsNestedInput
    images?: SalonImageUpdateManyWithoutSalonNestedInput
    deals?: DealUpdateManyWithoutSalonNestedInput
    jobs?: JobUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutServicesInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salonTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SalonImageUncheckedUpdateManyWithoutSalonNestedInput
    deals?: DealUncheckedUpdateManyWithoutSalonNestedInput
    jobs?: JobUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type ServiceUpsertWithoutSalonsInput = {
    update: XOR<ServiceUpdateWithoutSalonsInput, ServiceUncheckedUpdateWithoutSalonsInput>
    create: XOR<ServiceCreateWithoutSalonsInput, ServiceUncheckedCreateWithoutSalonsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutSalonsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutSalonsInput, ServiceUncheckedUpdateWithoutSalonsInput>
  }

  export type ServiceUpdateWithoutSalonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUncheckedUpdateWithoutSalonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SalonCreateWithoutDealsInput = {
    salonName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    user: UserCreateNestedOneWithoutSalonsInput
    salonType: SalonTypeCreateNestedOneWithoutSalonsInput
    services?: SalonServiceCreateNestedManyWithoutSalonInput
    images?: SalonImageCreateNestedManyWithoutSalonInput
    jobs?: JobCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutDealsInput = {
    salonId?: number
    salonName: string
    userId: string
    salonTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    services?: SalonServiceUncheckedCreateNestedManyWithoutSalonInput
    images?: SalonImageUncheckedCreateNestedManyWithoutSalonInput
    jobs?: JobUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutDealsInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutDealsInput, SalonUncheckedCreateWithoutDealsInput>
  }

  export type SalonUpsertWithoutDealsInput = {
    update: XOR<SalonUpdateWithoutDealsInput, SalonUncheckedUpdateWithoutDealsInput>
    create: XOR<SalonCreateWithoutDealsInput, SalonUncheckedCreateWithoutDealsInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutDealsInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutDealsInput, SalonUncheckedUpdateWithoutDealsInput>
  }

  export type SalonUpdateWithoutDealsInput = {
    salonName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSalonsNestedInput
    salonType?: SalonTypeUpdateOneRequiredWithoutSalonsNestedInput
    services?: SalonServiceUpdateManyWithoutSalonNestedInput
    images?: SalonImageUpdateManyWithoutSalonNestedInput
    jobs?: JobUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutDealsInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salonTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    services?: SalonServiceUncheckedUpdateManyWithoutSalonNestedInput
    images?: SalonImageUncheckedUpdateManyWithoutSalonNestedInput
    jobs?: JobUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonCreateWithoutImagesInput = {
    salonName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    user: UserCreateNestedOneWithoutSalonsInput
    salonType: SalonTypeCreateNestedOneWithoutSalonsInput
    services?: SalonServiceCreateNestedManyWithoutSalonInput
    deals?: DealCreateNestedManyWithoutSalonInput
    jobs?: JobCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutImagesInput = {
    salonId?: number
    salonName: string
    userId: string
    salonTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    services?: SalonServiceUncheckedCreateNestedManyWithoutSalonInput
    deals?: DealUncheckedCreateNestedManyWithoutSalonInput
    jobs?: JobUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutImagesInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutImagesInput, SalonUncheckedCreateWithoutImagesInput>
  }

  export type SalonUpsertWithoutImagesInput = {
    update: XOR<SalonUpdateWithoutImagesInput, SalonUncheckedUpdateWithoutImagesInput>
    create: XOR<SalonCreateWithoutImagesInput, SalonUncheckedCreateWithoutImagesInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutImagesInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutImagesInput, SalonUncheckedUpdateWithoutImagesInput>
  }

  export type SalonUpdateWithoutImagesInput = {
    salonName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSalonsNestedInput
    salonType?: SalonTypeUpdateOneRequiredWithoutSalonsNestedInput
    services?: SalonServiceUpdateManyWithoutSalonNestedInput
    deals?: DealUpdateManyWithoutSalonNestedInput
    jobs?: JobUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutImagesInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salonTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    services?: SalonServiceUncheckedUpdateManyWithoutSalonNestedInput
    deals?: DealUncheckedUpdateManyWithoutSalonNestedInput
    jobs?: JobUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonCreateWithoutJobsInput = {
    salonName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    user: UserCreateNestedOneWithoutSalonsInput
    salonType: SalonTypeCreateNestedOneWithoutSalonsInput
    services?: SalonServiceCreateNestedManyWithoutSalonInput
    images?: SalonImageCreateNestedManyWithoutSalonInput
    deals?: DealCreateNestedManyWithoutSalonInput
  }

  export type SalonUncheckedCreateWithoutJobsInput = {
    salonId?: number
    salonName: string
    userId: string
    salonTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
    services?: SalonServiceUncheckedCreateNestedManyWithoutSalonInput
    images?: SalonImageUncheckedCreateNestedManyWithoutSalonInput
    deals?: DealUncheckedCreateNestedManyWithoutSalonInput
  }

  export type SalonCreateOrConnectWithoutJobsInput = {
    where: SalonWhereUniqueInput
    create: XOR<SalonCreateWithoutJobsInput, SalonUncheckedCreateWithoutJobsInput>
  }

  export type ApplicationCreateWithoutJobInput = {
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: number
    applicantId: string
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type SalonUpsertWithoutJobsInput = {
    update: XOR<SalonUpdateWithoutJobsInput, SalonUncheckedUpdateWithoutJobsInput>
    create: XOR<SalonCreateWithoutJobsInput, SalonUncheckedCreateWithoutJobsInput>
    where?: SalonWhereInput
  }

  export type SalonUpdateToOneWithWhereWithoutJobsInput = {
    where?: SalonWhereInput
    data: XOR<SalonUpdateWithoutJobsInput, SalonUncheckedUpdateWithoutJobsInput>
  }

  export type SalonUpdateWithoutJobsInput = {
    salonName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSalonsNestedInput
    salonType?: SalonTypeUpdateOneRequiredWithoutSalonsNestedInput
    services?: SalonServiceUpdateManyWithoutSalonNestedInput
    images?: SalonImageUpdateManyWithoutSalonNestedInput
    deals?: DealUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutJobsInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    salonTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    services?: SalonServiceUncheckedUpdateManyWithoutSalonNestedInput
    images?: SalonImageUncheckedUpdateManyWithoutSalonNestedInput
    deals?: DealUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type JobCreateWithoutApplicationsInput = {
    title: string
    description?: string | null
    salary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    salon: SalonCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: number
    title: string
    description?: string | null
    salary?: string | null
    salonId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    phone?: string | null
    profilePicture?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    lastLoginAt?: Date | string | null
    CVR?: string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.RoleName | null
    salons?: SalonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    phone?: string | null
    profilePicture?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    lastLoginAt?: Date | string | null
    CVR?: string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.RoleName | null
    salons?: SalonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salon?: SalonUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    salonId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CVR?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    salons?: SalonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CVR?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: NullableEnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName | null
    salons?: SalonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SalonCreateManyUserInput = {
    salonId?: number
    salonName: string
    salonTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: number
    jobId: number
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalonUpdateWithoutUserInput = {
    salonName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salonType?: SalonTypeUpdateOneRequiredWithoutSalonsNestedInput
    services?: SalonServiceUpdateManyWithoutSalonNestedInput
    images?: SalonImageUpdateManyWithoutSalonNestedInput
    deals?: DealUpdateManyWithoutSalonNestedInput
    jobs?: JobUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutUserInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    salonTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    services?: SalonServiceUncheckedUpdateManyWithoutSalonNestedInput
    images?: SalonImageUncheckedUpdateManyWithoutSalonNestedInput
    deals?: DealUncheckedUpdateManyWithoutSalonNestedInput
    jobs?: JobUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateManyWithoutUserInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    salonTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonServiceCreateManySalonInput = {
    id?: number
    serviceId: number
  }

  export type SalonImageCreateManySalonInput = {
    id?: number
    url: string
    fileName?: string | null
    createdAt?: Date | string
  }

  export type DealCreateManySalonInput = {
    id?: number
    title: string
    description: string
    originalPrice: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    startDate: Date | string
    expiryDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    durationMinutes: number
    imageUrl?: string | null
  }

  export type JobCreateManySalonInput = {
    id?: number
    title: string
    description?: string | null
    salary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalonServiceUpdateWithoutSalonInput = {
    service?: ServiceUpdateOneRequiredWithoutSalonsNestedInput
  }

  export type SalonServiceUncheckedUpdateWithoutSalonInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type SalonServiceUncheckedUpdateManyWithoutSalonInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
  }

  export type SalonImageUpdateWithoutSalonInput = {
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonImageUncheckedUpdateWithoutSalonInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonImageUncheckedUpdateManyWithoutSalonInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealUpdateWithoutSalonInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealUncheckedUpdateWithoutSalonInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealUncheckedUpdateManyWithoutSalonInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobUpdateWithoutSalonInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutSalonInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutSalonInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalonCreateManySalonTypeInput = {
    salonId?: number
    salonName: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: string | null
    city?: string | null
    zipCode?: string | null
    country?: string | null
    phone?: string | null
  }

  export type SalonUpdateWithoutSalonTypeInput = {
    salonName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSalonsNestedInput
    services?: SalonServiceUpdateManyWithoutSalonNestedInput
    images?: SalonImageUpdateManyWithoutSalonNestedInput
    deals?: DealUpdateManyWithoutSalonNestedInput
    jobs?: JobUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateWithoutSalonTypeInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    services?: SalonServiceUncheckedUpdateManyWithoutSalonNestedInput
    images?: SalonImageUncheckedUpdateManyWithoutSalonNestedInput
    deals?: DealUncheckedUpdateManyWithoutSalonNestedInput
    jobs?: JobUncheckedUpdateManyWithoutSalonNestedInput
  }

  export type SalonUncheckedUpdateManyWithoutSalonTypeInput = {
    salonId?: IntFieldUpdateOperationsInput | number
    salonName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SalonServiceCreateManyServiceInput = {
    id?: number
    salonId: number
  }

  export type SalonServiceUpdateWithoutServiceInput = {
    salon?: SalonUpdateOneRequiredWithoutServicesNestedInput
  }

  export type SalonServiceUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    salonId?: IntFieldUpdateOperationsInput | number
  }

  export type SalonServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    salonId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationCreateManyJobInput = {
    id?: number
    applicantId: string
    resumeText?: string | null
    linkedInURL?: string | null
    coverLetter?: string | null
    status?: $Enums.AppStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutJobInput = {
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeText?: NullableStringFieldUpdateOperationsInput | string | null
    linkedInURL?: NullableStringFieldUpdateOperationsInput | string | null
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}