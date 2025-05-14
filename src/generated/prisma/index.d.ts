
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model admins
 * 
 */
export type admins = $Result.DefaultSelection<Prisma.$adminsPayload>
/**
 * Model anonymous_diagnostics
 * 
 */
export type anonymous_diagnostics = $Result.DefaultSelection<Prisma.$anonymous_diagnosticsPayload>
/**
 * Model beneficiaries
 * 
 */
export type beneficiaries = $Result.DefaultSelection<Prisma.$beneficiariesPayload>
/**
 * Model diagnostics
 * 
 */
export type diagnostics = $Result.DefaultSelection<Prisma.$diagnosticsPayload>
/**
 * Model face_embeddings
 * 
 */
export type face_embeddings = $Result.DefaultSelection<Prisma.$face_embeddingsPayload>
/**
 * Model knowledge_documents
 * 
 */
export type knowledge_documents = $Result.DefaultSelection<Prisma.$knowledge_documentsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model volunteers
 * 
 */
export type volunteers = $Result.DefaultSelection<Prisma.$volunteersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DiagnosticStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type DiagnosticStatus = (typeof DiagnosticStatus)[keyof typeof DiagnosticStatus]


export const UserStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserType: {
  ADMIN: 'ADMIN',
  VOLUNTEER: 'VOLUNTEER',
  BENEFICIARY: 'BENEFICIARY'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type DiagnosticStatus = $Enums.DiagnosticStatus

export const DiagnosticStatus: typeof $Enums.DiagnosticStatus

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admins`: Exposes CRUD operations for the **admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.adminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anonymous_diagnostics`: Exposes CRUD operations for the **anonymous_diagnostics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anonymous_diagnostics
    * const anonymous_diagnostics = await prisma.anonymous_diagnostics.findMany()
    * ```
    */
  get anonymous_diagnostics(): Prisma.anonymous_diagnosticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beneficiaries`: Exposes CRUD operations for the **beneficiaries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiaries
    * const beneficiaries = await prisma.beneficiaries.findMany()
    * ```
    */
  get beneficiaries(): Prisma.beneficiariesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnostics`: Exposes CRUD operations for the **diagnostics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnostics
    * const diagnostics = await prisma.diagnostics.findMany()
    * ```
    */
  get diagnostics(): Prisma.diagnosticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.face_embeddings`: Exposes CRUD operations for the **face_embeddings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Face_embeddings
    * const face_embeddings = await prisma.face_embeddings.findMany()
    * ```
    */
  get face_embeddings(): Prisma.face_embeddingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledge_documents`: Exposes CRUD operations for the **knowledge_documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Knowledge_documents
    * const knowledge_documents = await prisma.knowledge_documents.findMany()
    * ```
    */
  get knowledge_documents(): Prisma.knowledge_documentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteers`: Exposes CRUD operations for the **volunteers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volunteers
    * const volunteers = await prisma.volunteers.findMany()
    * ```
    */
  get volunteers(): Prisma.volunteersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    admins: 'admins',
    anonymous_diagnostics: 'anonymous_diagnostics',
    beneficiaries: 'beneficiaries',
    diagnostics: 'diagnostics',
    face_embeddings: 'face_embeddings',
    knowledge_documents: 'knowledge_documents',
    users: 'users',
    volunteers: 'volunteers'
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
      modelProps: "account" | "session" | "verificationToken" | "admins" | "anonymous_diagnostics" | "beneficiaries" | "diagnostics" | "face_embeddings" | "knowledge_documents" | "users" | "volunteers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      admins: {
        payload: Prisma.$adminsPayload<ExtArgs>
        fields: Prisma.adminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findFirst: {
            args: Prisma.adminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          findMany: {
            args: Prisma.adminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          create: {
            args: Prisma.adminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          createMany: {
            args: Prisma.adminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          delete: {
            args: Prisma.adminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          update: {
            args: Prisma.adminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          deleteMany: {
            args: Prisma.adminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>[]
          }
          upsert: {
            args: Prisma.adminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.adminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      anonymous_diagnostics: {
        payload: Prisma.$anonymous_diagnosticsPayload<ExtArgs>
        fields: Prisma.anonymous_diagnosticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.anonymous_diagnosticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.anonymous_diagnosticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>
          }
          findFirst: {
            args: Prisma.anonymous_diagnosticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.anonymous_diagnosticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>
          }
          findMany: {
            args: Prisma.anonymous_diagnosticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>[]
          }
          create: {
            args: Prisma.anonymous_diagnosticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>
          }
          createMany: {
            args: Prisma.anonymous_diagnosticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.anonymous_diagnosticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>[]
          }
          delete: {
            args: Prisma.anonymous_diagnosticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>
          }
          update: {
            args: Prisma.anonymous_diagnosticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>
          }
          deleteMany: {
            args: Prisma.anonymous_diagnosticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.anonymous_diagnosticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.anonymous_diagnosticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>[]
          }
          upsert: {
            args: Prisma.anonymous_diagnosticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$anonymous_diagnosticsPayload>
          }
          aggregate: {
            args: Prisma.Anonymous_diagnosticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnonymous_diagnostics>
          }
          groupBy: {
            args: Prisma.anonymous_diagnosticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Anonymous_diagnosticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.anonymous_diagnosticsCountArgs<ExtArgs>
            result: $Utils.Optional<Anonymous_diagnosticsCountAggregateOutputType> | number
          }
        }
      }
      beneficiaries: {
        payload: Prisma.$beneficiariesPayload<ExtArgs>
        fields: Prisma.beneficiariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.beneficiariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.beneficiariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>
          }
          findFirst: {
            args: Prisma.beneficiariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.beneficiariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>
          }
          findMany: {
            args: Prisma.beneficiariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>[]
          }
          create: {
            args: Prisma.beneficiariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>
          }
          createMany: {
            args: Prisma.beneficiariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.beneficiariesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>[]
          }
          delete: {
            args: Prisma.beneficiariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>
          }
          update: {
            args: Prisma.beneficiariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>
          }
          deleteMany: {
            args: Prisma.beneficiariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.beneficiariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.beneficiariesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>[]
          }
          upsert: {
            args: Prisma.beneficiariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiariesPayload>
          }
          aggregate: {
            args: Prisma.BeneficiariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiaries>
          }
          groupBy: {
            args: Prisma.beneficiariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.beneficiariesCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiariesCountAggregateOutputType> | number
          }
        }
      }
      diagnostics: {
        payload: Prisma.$diagnosticsPayload<ExtArgs>
        fields: Prisma.diagnosticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diagnosticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diagnosticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>
          }
          findFirst: {
            args: Prisma.diagnosticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diagnosticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>
          }
          findMany: {
            args: Prisma.diagnosticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>[]
          }
          create: {
            args: Prisma.diagnosticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>
          }
          createMany: {
            args: Prisma.diagnosticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.diagnosticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>[]
          }
          delete: {
            args: Prisma.diagnosticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>
          }
          update: {
            args: Prisma.diagnosticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>
          }
          deleteMany: {
            args: Prisma.diagnosticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diagnosticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.diagnosticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>[]
          }
          upsert: {
            args: Prisma.diagnosticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticsPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnostics>
          }
          groupBy: {
            args: Prisma.diagnosticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.diagnosticsCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticsCountAggregateOutputType> | number
          }
        }
      }
      face_embeddings: {
        payload: Prisma.$face_embeddingsPayload<ExtArgs>
        fields: Prisma.face_embeddingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.face_embeddingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.face_embeddingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>
          }
          findFirst: {
            args: Prisma.face_embeddingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.face_embeddingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>
          }
          findMany: {
            args: Prisma.face_embeddingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>[]
          }
          create: {
            args: Prisma.face_embeddingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>
          }
          createMany: {
            args: Prisma.face_embeddingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.face_embeddingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>[]
          }
          delete: {
            args: Prisma.face_embeddingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>
          }
          update: {
            args: Prisma.face_embeddingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>
          }
          deleteMany: {
            args: Prisma.face_embeddingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.face_embeddingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.face_embeddingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>[]
          }
          upsert: {
            args: Prisma.face_embeddingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_embeddingsPayload>
          }
          aggregate: {
            args: Prisma.Face_embeddingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFace_embeddings>
          }
          groupBy: {
            args: Prisma.face_embeddingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Face_embeddingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.face_embeddingsCountArgs<ExtArgs>
            result: $Utils.Optional<Face_embeddingsCountAggregateOutputType> | number
          }
        }
      }
      knowledge_documents: {
        payload: Prisma.$knowledge_documentsPayload<ExtArgs>
        fields: Prisma.knowledge_documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.knowledge_documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.knowledge_documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>
          }
          findFirst: {
            args: Prisma.knowledge_documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.knowledge_documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>
          }
          findMany: {
            args: Prisma.knowledge_documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>[]
          }
          create: {
            args: Prisma.knowledge_documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>
          }
          createMany: {
            args: Prisma.knowledge_documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.knowledge_documentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>[]
          }
          delete: {
            args: Prisma.knowledge_documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>
          }
          update: {
            args: Prisma.knowledge_documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>
          }
          deleteMany: {
            args: Prisma.knowledge_documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.knowledge_documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.knowledge_documentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>[]
          }
          upsert: {
            args: Prisma.knowledge_documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$knowledge_documentsPayload>
          }
          aggregate: {
            args: Prisma.Knowledge_documentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledge_documents>
          }
          groupBy: {
            args: Prisma.knowledge_documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Knowledge_documentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.knowledge_documentsCountArgs<ExtArgs>
            result: $Utils.Optional<Knowledge_documentsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      volunteers: {
        payload: Prisma.$volunteersPayload<ExtArgs>
        fields: Prisma.volunteersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.volunteersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.volunteersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>
          }
          findFirst: {
            args: Prisma.volunteersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.volunteersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>
          }
          findMany: {
            args: Prisma.volunteersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>[]
          }
          create: {
            args: Prisma.volunteersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>
          }
          createMany: {
            args: Prisma.volunteersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.volunteersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>[]
          }
          delete: {
            args: Prisma.volunteersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>
          }
          update: {
            args: Prisma.volunteersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>
          }
          deleteMany: {
            args: Prisma.volunteersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.volunteersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.volunteersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>[]
          }
          upsert: {
            args: Prisma.volunteersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volunteersPayload>
          }
          aggregate: {
            args: Prisma.VolunteersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteers>
          }
          groupBy: {
            args: Prisma.volunteersGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteersGroupByOutputType>[]
          }
          count: {
            args: Prisma.volunteersCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteersCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    admins?: adminsOmit
    anonymous_diagnostics?: anonymous_diagnosticsOmit
    beneficiaries?: beneficiariesOmit
    diagnostics?: diagnosticsOmit
    face_embeddings?: face_embeddingsOmit
    knowledge_documents?: knowledge_documentsOmit
    users?: usersOmit
    volunteers?: volunteersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AdminsCountOutputType
   */

  export type AdminsCountOutputType = {
    knowledge_documents: number
  }

  export type AdminsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    knowledge_documents?: boolean | AdminsCountOutputTypeCountKnowledge_documentsArgs
  }

  // Custom InputTypes
  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminsCountOutputType
     */
    select?: AdminsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeCountKnowledge_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: knowledge_documentsWhereInput
  }


  /**
   * Count Type BeneficiariesCountOutputType
   */

  export type BeneficiariesCountOutputType = {
    diagnostics: number
  }

  export type BeneficiariesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostics?: boolean | BeneficiariesCountOutputTypeCountDiagnosticsArgs
  }

  // Custom InputTypes
  /**
   * BeneficiariesCountOutputType without action
   */
  export type BeneficiariesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiariesCountOutputType
     */
    select?: BeneficiariesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BeneficiariesCountOutputType without action
   */
  export type BeneficiariesCountOutputTypeCountDiagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosticsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Account: number
    Session: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | UsersCountOutputTypeCountAccountArgs
    Session?: boolean | UsersCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type VolunteersCountOutputType
   */

  export type VolunteersCountOutputType = {
    beneficiaries: number
    diagnostics: number
  }

  export type VolunteersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaries?: boolean | VolunteersCountOutputTypeCountBeneficiariesArgs
    diagnostics?: boolean | VolunteersCountOutputTypeCountDiagnosticsArgs
  }

  // Custom InputTypes
  /**
   * VolunteersCountOutputType without action
   */
  export type VolunteersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteersCountOutputType
     */
    select?: VolunteersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VolunteersCountOutputType without action
   */
  export type VolunteersCountOutputTypeCountBeneficiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: beneficiariesWhereInput
  }

  /**
   * VolunteersCountOutputType without action
   */
  export type VolunteersCountOutputTypeCountDiagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosticsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    userId: string | null
  }

  export type AdminsMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    userId: string | null
  }

  export type AdminsCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    userId: number
    _all: number
  }


  export type AdminsMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    userId?: true
  }

  export type AdminsMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    userId?: true
  }

  export type AdminsCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    userId?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to aggregate.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type adminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminsWhereInput
    orderBy?: adminsOrderByWithAggregationInput | adminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: adminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    phone: string | null
    userId: string
    _count: AdminsCountAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends adminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type adminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    knowledge_documents?: boolean | admins$knowledge_documentsArgs<ExtArgs>
    _count?: boolean | AdminsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type adminsSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    userId?: boolean
  }

  export type adminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phone" | "userId", ExtArgs["result"]["admins"]>
  export type adminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    knowledge_documents?: boolean | admins$knowledge_documentsArgs<ExtArgs>
    _count?: boolean | AdminsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type adminsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type adminsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $adminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admins"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      knowledge_documents: Prisma.$knowledge_documentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      phone: string | null
      userId: string
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type adminsGetPayload<S extends boolean | null | undefined | adminsDefaultArgs> = $Result.GetResult<Prisma.$adminsPayload, S>

  type adminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface adminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admins'], meta: { name: 'admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {adminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminsFindUniqueArgs>(args: SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs>(args: SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminsFindFirstArgs>(args?: SelectSubset<T, adminsFindFirstArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs>(args?: SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminsFindManyArgs>(args?: SelectSubset<T, adminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admins.
     * @param {adminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends adminsCreateArgs>(args: SelectSubset<T, adminsCreateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminsCreateManyArgs>(args?: SelectSubset<T, adminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminsCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminsCreateManyAndReturnArgs>(args?: SelectSubset<T, adminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admins.
     * @param {adminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends adminsDeleteArgs>(args: SelectSubset<T, adminsDeleteArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admins.
     * @param {adminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminsUpdateArgs>(args: SelectSubset<T, adminsUpdateArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminsDeleteManyArgs>(args?: SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminsUpdateManyArgs>(args: SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminsUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.updateManyAndReturn({
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
    updateManyAndReturn<T extends adminsUpdateManyAndReturnArgs>(args: SelectSubset<T, adminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admins.
     * @param {adminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends adminsUpsertArgs>(args: SelectSubset<T, adminsUpsertArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminsCountArgs>(
      args?: Subset<T, adminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminsGroupByArgs} args - Group by arguments.
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
      T extends adminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminsGroupByArgs['orderBy'] }
        : { orderBy?: adminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admins model
   */
  readonly fields: adminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    knowledge_documents<T extends admins$knowledge_documentsArgs<ExtArgs> = {}>(args?: Subset<T, admins$knowledge_documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the admins model
   */
  interface adminsFieldRefs {
    readonly id: FieldRef<"admins", 'String'>
    readonly firstName: FieldRef<"admins", 'String'>
    readonly lastName: FieldRef<"admins", 'String'>
    readonly phone: FieldRef<"admins", 'String'>
    readonly userId: FieldRef<"admins", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admins findUnique
   */
  export type adminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findUniqueOrThrow
   */
  export type adminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins findFirst
   */
  export type adminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findFirstOrThrow
   */
  export type adminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins findMany
   */
  export type adminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminsOrderByWithRelationInput | adminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * admins create
   */
  export type adminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to create a admins.
     */
    data: XOR<adminsCreateInput, adminsUncheckedCreateInput>
  }

  /**
   * admins createMany
   */
  export type adminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admins createManyAndReturn
   */
  export type adminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminsCreateManyInput | adminsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * admins update
   */
  export type adminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The data needed to update a admins.
     */
    data: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
    /**
     * Choose, which admins to update.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins updateMany
   */
  export type adminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admins updateManyAndReturn
   */
  export type adminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminsUpdateManyMutationInput, adminsUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * admins upsert
   */
  export type adminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * The filter to search for the admins to update in case it exists.
     */
    where: adminsWhereUniqueInput
    /**
     * In case the admins found by the `where` argument doesn't exist, create a new admins with this data.
     */
    create: XOR<adminsCreateInput, adminsUncheckedCreateInput>
    /**
     * In case the admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminsUpdateInput, adminsUncheckedUpdateInput>
  }

  /**
   * admins delete
   */
  export type adminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    /**
     * Filter which admins to delete.
     */
    where: adminsWhereUniqueInput
  }

  /**
   * admins deleteMany
   */
  export type adminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminsWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admins.knowledge_documents
   */
  export type admins$knowledge_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    where?: knowledge_documentsWhereInput
    orderBy?: knowledge_documentsOrderByWithRelationInput | knowledge_documentsOrderByWithRelationInput[]
    cursor?: knowledge_documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Knowledge_documentsScalarFieldEnum | Knowledge_documentsScalarFieldEnum[]
  }

  /**
   * admins without action
   */
  export type adminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
  }


  /**
   * Model anonymous_diagnostics
   */

  export type AggregateAnonymous_diagnostics = {
    _count: Anonymous_diagnosticsCountAggregateOutputType | null
    _min: Anonymous_diagnosticsMinAggregateOutputType | null
    _max: Anonymous_diagnosticsMaxAggregateOutputType | null
  }

  export type Anonymous_diagnosticsMinAggregateOutputType = {
    id: string | null
    diagnosticDate: Date | null
    nextSteps: string | null
    pdfUrl: string | null
  }

  export type Anonymous_diagnosticsMaxAggregateOutputType = {
    id: string | null
    diagnosticDate: Date | null
    nextSteps: string | null
    pdfUrl: string | null
  }

  export type Anonymous_diagnosticsCountAggregateOutputType = {
    id: number
    diagnosticDate: number
    formResponses: number
    results: number
    recommendations: number
    nextSteps: number
    pdfUrl: number
    _all: number
  }


  export type Anonymous_diagnosticsMinAggregateInputType = {
    id?: true
    diagnosticDate?: true
    nextSteps?: true
    pdfUrl?: true
  }

  export type Anonymous_diagnosticsMaxAggregateInputType = {
    id?: true
    diagnosticDate?: true
    nextSteps?: true
    pdfUrl?: true
  }

  export type Anonymous_diagnosticsCountAggregateInputType = {
    id?: true
    diagnosticDate?: true
    formResponses?: true
    results?: true
    recommendations?: true
    nextSteps?: true
    pdfUrl?: true
    _all?: true
  }

  export type Anonymous_diagnosticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which anonymous_diagnostics to aggregate.
     */
    where?: anonymous_diagnosticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anonymous_diagnostics to fetch.
     */
    orderBy?: anonymous_diagnosticsOrderByWithRelationInput | anonymous_diagnosticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: anonymous_diagnosticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anonymous_diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anonymous_diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned anonymous_diagnostics
    **/
    _count?: true | Anonymous_diagnosticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Anonymous_diagnosticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Anonymous_diagnosticsMaxAggregateInputType
  }

  export type GetAnonymous_diagnosticsAggregateType<T extends Anonymous_diagnosticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnonymous_diagnostics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnonymous_diagnostics[P]>
      : GetScalarType<T[P], AggregateAnonymous_diagnostics[P]>
  }




  export type anonymous_diagnosticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: anonymous_diagnosticsWhereInput
    orderBy?: anonymous_diagnosticsOrderByWithAggregationInput | anonymous_diagnosticsOrderByWithAggregationInput[]
    by: Anonymous_diagnosticsScalarFieldEnum[] | Anonymous_diagnosticsScalarFieldEnum
    having?: anonymous_diagnosticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Anonymous_diagnosticsCountAggregateInputType | true
    _min?: Anonymous_diagnosticsMinAggregateInputType
    _max?: Anonymous_diagnosticsMaxAggregateInputType
  }

  export type Anonymous_diagnosticsGroupByOutputType = {
    id: string
    diagnosticDate: Date
    formResponses: JsonValue | null
    results: JsonValue | null
    recommendations: JsonValue | null
    nextSteps: string | null
    pdfUrl: string | null
    _count: Anonymous_diagnosticsCountAggregateOutputType | null
    _min: Anonymous_diagnosticsMinAggregateOutputType | null
    _max: Anonymous_diagnosticsMaxAggregateOutputType | null
  }

  type GetAnonymous_diagnosticsGroupByPayload<T extends anonymous_diagnosticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Anonymous_diagnosticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Anonymous_diagnosticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Anonymous_diagnosticsGroupByOutputType[P]>
            : GetScalarType<T[P], Anonymous_diagnosticsGroupByOutputType[P]>
        }
      >
    >


  export type anonymous_diagnosticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosticDate?: boolean
    formResponses?: boolean
    results?: boolean
    recommendations?: boolean
    nextSteps?: boolean
    pdfUrl?: boolean
  }, ExtArgs["result"]["anonymous_diagnostics"]>

  export type anonymous_diagnosticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosticDate?: boolean
    formResponses?: boolean
    results?: boolean
    recommendations?: boolean
    nextSteps?: boolean
    pdfUrl?: boolean
  }, ExtArgs["result"]["anonymous_diagnostics"]>

  export type anonymous_diagnosticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosticDate?: boolean
    formResponses?: boolean
    results?: boolean
    recommendations?: boolean
    nextSteps?: boolean
    pdfUrl?: boolean
  }, ExtArgs["result"]["anonymous_diagnostics"]>

  export type anonymous_diagnosticsSelectScalar = {
    id?: boolean
    diagnosticDate?: boolean
    formResponses?: boolean
    results?: boolean
    recommendations?: boolean
    nextSteps?: boolean
    pdfUrl?: boolean
  }

  export type anonymous_diagnosticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diagnosticDate" | "formResponses" | "results" | "recommendations" | "nextSteps" | "pdfUrl", ExtArgs["result"]["anonymous_diagnostics"]>

  export type $anonymous_diagnosticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "anonymous_diagnostics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      diagnosticDate: Date
      formResponses: Prisma.JsonValue | null
      results: Prisma.JsonValue | null
      recommendations: Prisma.JsonValue | null
      nextSteps: string | null
      pdfUrl: string | null
    }, ExtArgs["result"]["anonymous_diagnostics"]>
    composites: {}
  }

  type anonymous_diagnosticsGetPayload<S extends boolean | null | undefined | anonymous_diagnosticsDefaultArgs> = $Result.GetResult<Prisma.$anonymous_diagnosticsPayload, S>

  type anonymous_diagnosticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<anonymous_diagnosticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Anonymous_diagnosticsCountAggregateInputType | true
    }

  export interface anonymous_diagnosticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['anonymous_diagnostics'], meta: { name: 'anonymous_diagnostics' } }
    /**
     * Find zero or one Anonymous_diagnostics that matches the filter.
     * @param {anonymous_diagnosticsFindUniqueArgs} args - Arguments to find a Anonymous_diagnostics
     * @example
     * // Get one Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends anonymous_diagnosticsFindUniqueArgs>(args: SelectSubset<T, anonymous_diagnosticsFindUniqueArgs<ExtArgs>>): Prisma__anonymous_diagnosticsClient<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anonymous_diagnostics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {anonymous_diagnosticsFindUniqueOrThrowArgs} args - Arguments to find a Anonymous_diagnostics
     * @example
     * // Get one Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends anonymous_diagnosticsFindUniqueOrThrowArgs>(args: SelectSubset<T, anonymous_diagnosticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__anonymous_diagnosticsClient<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anonymous_diagnostics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anonymous_diagnosticsFindFirstArgs} args - Arguments to find a Anonymous_diagnostics
     * @example
     * // Get one Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends anonymous_diagnosticsFindFirstArgs>(args?: SelectSubset<T, anonymous_diagnosticsFindFirstArgs<ExtArgs>>): Prisma__anonymous_diagnosticsClient<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anonymous_diagnostics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anonymous_diagnosticsFindFirstOrThrowArgs} args - Arguments to find a Anonymous_diagnostics
     * @example
     * // Get one Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends anonymous_diagnosticsFindFirstOrThrowArgs>(args?: SelectSubset<T, anonymous_diagnosticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__anonymous_diagnosticsClient<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anonymous_diagnostics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anonymous_diagnosticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.findMany()
     * 
     * // Get first 10 Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anonymous_diagnosticsWithIdOnly = await prisma.anonymous_diagnostics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends anonymous_diagnosticsFindManyArgs>(args?: SelectSubset<T, anonymous_diagnosticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anonymous_diagnostics.
     * @param {anonymous_diagnosticsCreateArgs} args - Arguments to create a Anonymous_diagnostics.
     * @example
     * // Create one Anonymous_diagnostics
     * const Anonymous_diagnostics = await prisma.anonymous_diagnostics.create({
     *   data: {
     *     // ... data to create a Anonymous_diagnostics
     *   }
     * })
     * 
     */
    create<T extends anonymous_diagnosticsCreateArgs>(args: SelectSubset<T, anonymous_diagnosticsCreateArgs<ExtArgs>>): Prisma__anonymous_diagnosticsClient<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anonymous_diagnostics.
     * @param {anonymous_diagnosticsCreateManyArgs} args - Arguments to create many Anonymous_diagnostics.
     * @example
     * // Create many Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends anonymous_diagnosticsCreateManyArgs>(args?: SelectSubset<T, anonymous_diagnosticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anonymous_diagnostics and returns the data saved in the database.
     * @param {anonymous_diagnosticsCreateManyAndReturnArgs} args - Arguments to create many Anonymous_diagnostics.
     * @example
     * // Create many Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anonymous_diagnostics and only return the `id`
     * const anonymous_diagnosticsWithIdOnly = await prisma.anonymous_diagnostics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends anonymous_diagnosticsCreateManyAndReturnArgs>(args?: SelectSubset<T, anonymous_diagnosticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anonymous_diagnostics.
     * @param {anonymous_diagnosticsDeleteArgs} args - Arguments to delete one Anonymous_diagnostics.
     * @example
     * // Delete one Anonymous_diagnostics
     * const Anonymous_diagnostics = await prisma.anonymous_diagnostics.delete({
     *   where: {
     *     // ... filter to delete one Anonymous_diagnostics
     *   }
     * })
     * 
     */
    delete<T extends anonymous_diagnosticsDeleteArgs>(args: SelectSubset<T, anonymous_diagnosticsDeleteArgs<ExtArgs>>): Prisma__anonymous_diagnosticsClient<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anonymous_diagnostics.
     * @param {anonymous_diagnosticsUpdateArgs} args - Arguments to update one Anonymous_diagnostics.
     * @example
     * // Update one Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends anonymous_diagnosticsUpdateArgs>(args: SelectSubset<T, anonymous_diagnosticsUpdateArgs<ExtArgs>>): Prisma__anonymous_diagnosticsClient<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anonymous_diagnostics.
     * @param {anonymous_diagnosticsDeleteManyArgs} args - Arguments to filter Anonymous_diagnostics to delete.
     * @example
     * // Delete a few Anonymous_diagnostics
     * const { count } = await prisma.anonymous_diagnostics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends anonymous_diagnosticsDeleteManyArgs>(args?: SelectSubset<T, anonymous_diagnosticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anonymous_diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anonymous_diagnosticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends anonymous_diagnosticsUpdateManyArgs>(args: SelectSubset<T, anonymous_diagnosticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anonymous_diagnostics and returns the data updated in the database.
     * @param {anonymous_diagnosticsUpdateManyAndReturnArgs} args - Arguments to update many Anonymous_diagnostics.
     * @example
     * // Update many Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anonymous_diagnostics and only return the `id`
     * const anonymous_diagnosticsWithIdOnly = await prisma.anonymous_diagnostics.updateManyAndReturn({
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
    updateManyAndReturn<T extends anonymous_diagnosticsUpdateManyAndReturnArgs>(args: SelectSubset<T, anonymous_diagnosticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anonymous_diagnostics.
     * @param {anonymous_diagnosticsUpsertArgs} args - Arguments to update or create a Anonymous_diagnostics.
     * @example
     * // Update or create a Anonymous_diagnostics
     * const anonymous_diagnostics = await prisma.anonymous_diagnostics.upsert({
     *   create: {
     *     // ... data to create a Anonymous_diagnostics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anonymous_diagnostics we want to update
     *   }
     * })
     */
    upsert<T extends anonymous_diagnosticsUpsertArgs>(args: SelectSubset<T, anonymous_diagnosticsUpsertArgs<ExtArgs>>): Prisma__anonymous_diagnosticsClient<$Result.GetResult<Prisma.$anonymous_diagnosticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anonymous_diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anonymous_diagnosticsCountArgs} args - Arguments to filter Anonymous_diagnostics to count.
     * @example
     * // Count the number of Anonymous_diagnostics
     * const count = await prisma.anonymous_diagnostics.count({
     *   where: {
     *     // ... the filter for the Anonymous_diagnostics we want to count
     *   }
     * })
    **/
    count<T extends anonymous_diagnosticsCountArgs>(
      args?: Subset<T, anonymous_diagnosticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Anonymous_diagnosticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anonymous_diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Anonymous_diagnosticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Anonymous_diagnosticsAggregateArgs>(args: Subset<T, Anonymous_diagnosticsAggregateArgs>): Prisma.PrismaPromise<GetAnonymous_diagnosticsAggregateType<T>>

    /**
     * Group by Anonymous_diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {anonymous_diagnosticsGroupByArgs} args - Group by arguments.
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
      T extends anonymous_diagnosticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: anonymous_diagnosticsGroupByArgs['orderBy'] }
        : { orderBy?: anonymous_diagnosticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, anonymous_diagnosticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnonymous_diagnosticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the anonymous_diagnostics model
   */
  readonly fields: anonymous_diagnosticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for anonymous_diagnostics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__anonymous_diagnosticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the anonymous_diagnostics model
   */
  interface anonymous_diagnosticsFieldRefs {
    readonly id: FieldRef<"anonymous_diagnostics", 'String'>
    readonly diagnosticDate: FieldRef<"anonymous_diagnostics", 'DateTime'>
    readonly formResponses: FieldRef<"anonymous_diagnostics", 'Json'>
    readonly results: FieldRef<"anonymous_diagnostics", 'Json'>
    readonly recommendations: FieldRef<"anonymous_diagnostics", 'Json'>
    readonly nextSteps: FieldRef<"anonymous_diagnostics", 'String'>
    readonly pdfUrl: FieldRef<"anonymous_diagnostics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * anonymous_diagnostics findUnique
   */
  export type anonymous_diagnosticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * Filter, which anonymous_diagnostics to fetch.
     */
    where: anonymous_diagnosticsWhereUniqueInput
  }

  /**
   * anonymous_diagnostics findUniqueOrThrow
   */
  export type anonymous_diagnosticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * Filter, which anonymous_diagnostics to fetch.
     */
    where: anonymous_diagnosticsWhereUniqueInput
  }

  /**
   * anonymous_diagnostics findFirst
   */
  export type anonymous_diagnosticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * Filter, which anonymous_diagnostics to fetch.
     */
    where?: anonymous_diagnosticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anonymous_diagnostics to fetch.
     */
    orderBy?: anonymous_diagnosticsOrderByWithRelationInput | anonymous_diagnosticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for anonymous_diagnostics.
     */
    cursor?: anonymous_diagnosticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anonymous_diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anonymous_diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of anonymous_diagnostics.
     */
    distinct?: Anonymous_diagnosticsScalarFieldEnum | Anonymous_diagnosticsScalarFieldEnum[]
  }

  /**
   * anonymous_diagnostics findFirstOrThrow
   */
  export type anonymous_diagnosticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * Filter, which anonymous_diagnostics to fetch.
     */
    where?: anonymous_diagnosticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anonymous_diagnostics to fetch.
     */
    orderBy?: anonymous_diagnosticsOrderByWithRelationInput | anonymous_diagnosticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for anonymous_diagnostics.
     */
    cursor?: anonymous_diagnosticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anonymous_diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anonymous_diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of anonymous_diagnostics.
     */
    distinct?: Anonymous_diagnosticsScalarFieldEnum | Anonymous_diagnosticsScalarFieldEnum[]
  }

  /**
   * anonymous_diagnostics findMany
   */
  export type anonymous_diagnosticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * Filter, which anonymous_diagnostics to fetch.
     */
    where?: anonymous_diagnosticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of anonymous_diagnostics to fetch.
     */
    orderBy?: anonymous_diagnosticsOrderByWithRelationInput | anonymous_diagnosticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing anonymous_diagnostics.
     */
    cursor?: anonymous_diagnosticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` anonymous_diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` anonymous_diagnostics.
     */
    skip?: number
    distinct?: Anonymous_diagnosticsScalarFieldEnum | Anonymous_diagnosticsScalarFieldEnum[]
  }

  /**
   * anonymous_diagnostics create
   */
  export type anonymous_diagnosticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * The data needed to create a anonymous_diagnostics.
     */
    data: XOR<anonymous_diagnosticsCreateInput, anonymous_diagnosticsUncheckedCreateInput>
  }

  /**
   * anonymous_diagnostics createMany
   */
  export type anonymous_diagnosticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many anonymous_diagnostics.
     */
    data: anonymous_diagnosticsCreateManyInput | anonymous_diagnosticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * anonymous_diagnostics createManyAndReturn
   */
  export type anonymous_diagnosticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * The data used to create many anonymous_diagnostics.
     */
    data: anonymous_diagnosticsCreateManyInput | anonymous_diagnosticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * anonymous_diagnostics update
   */
  export type anonymous_diagnosticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * The data needed to update a anonymous_diagnostics.
     */
    data: XOR<anonymous_diagnosticsUpdateInput, anonymous_diagnosticsUncheckedUpdateInput>
    /**
     * Choose, which anonymous_diagnostics to update.
     */
    where: anonymous_diagnosticsWhereUniqueInput
  }

  /**
   * anonymous_diagnostics updateMany
   */
  export type anonymous_diagnosticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update anonymous_diagnostics.
     */
    data: XOR<anonymous_diagnosticsUpdateManyMutationInput, anonymous_diagnosticsUncheckedUpdateManyInput>
    /**
     * Filter which anonymous_diagnostics to update
     */
    where?: anonymous_diagnosticsWhereInput
    /**
     * Limit how many anonymous_diagnostics to update.
     */
    limit?: number
  }

  /**
   * anonymous_diagnostics updateManyAndReturn
   */
  export type anonymous_diagnosticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * The data used to update anonymous_diagnostics.
     */
    data: XOR<anonymous_diagnosticsUpdateManyMutationInput, anonymous_diagnosticsUncheckedUpdateManyInput>
    /**
     * Filter which anonymous_diagnostics to update
     */
    where?: anonymous_diagnosticsWhereInput
    /**
     * Limit how many anonymous_diagnostics to update.
     */
    limit?: number
  }

  /**
   * anonymous_diagnostics upsert
   */
  export type anonymous_diagnosticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * The filter to search for the anonymous_diagnostics to update in case it exists.
     */
    where: anonymous_diagnosticsWhereUniqueInput
    /**
     * In case the anonymous_diagnostics found by the `where` argument doesn't exist, create a new anonymous_diagnostics with this data.
     */
    create: XOR<anonymous_diagnosticsCreateInput, anonymous_diagnosticsUncheckedCreateInput>
    /**
     * In case the anonymous_diagnostics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<anonymous_diagnosticsUpdateInput, anonymous_diagnosticsUncheckedUpdateInput>
  }

  /**
   * anonymous_diagnostics delete
   */
  export type anonymous_diagnosticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
    /**
     * Filter which anonymous_diagnostics to delete.
     */
    where: anonymous_diagnosticsWhereUniqueInput
  }

  /**
   * anonymous_diagnostics deleteMany
   */
  export type anonymous_diagnosticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which anonymous_diagnostics to delete
     */
    where?: anonymous_diagnosticsWhereInput
    /**
     * Limit how many anonymous_diagnostics to delete.
     */
    limit?: number
  }

  /**
   * anonymous_diagnostics without action
   */
  export type anonymous_diagnosticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the anonymous_diagnostics
     */
    select?: anonymous_diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the anonymous_diagnostics
     */
    omit?: anonymous_diagnosticsOmit<ExtArgs> | null
  }


  /**
   * Model beneficiaries
   */

  export type AggregateBeneficiaries = {
    _count: BeneficiariesCountAggregateOutputType | null
    _avg: BeneficiariesAvgAggregateOutputType | null
    _sum: BeneficiariesSumAggregateOutputType | null
    _min: BeneficiariesMinAggregateOutputType | null
    _max: BeneficiariesMaxAggregateOutputType | null
  }

  export type BeneficiariesAvgAggregateOutputType = {
    monthlyIncome: number | null
  }

  export type BeneficiariesSumAggregateOutputType = {
    monthlyIncome: number | null
  }

  export type BeneficiariesMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    phone: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    familySituation: string | null
    housing: string | null
    professionalSituation: string | null
    monthlyIncome: number | null
    photoUrl: string | null
    userId: string | null
    volunteerRefId: string | null
  }

  export type BeneficiariesMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    phone: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    familySituation: string | null
    housing: string | null
    professionalSituation: string | null
    monthlyIncome: number | null
    photoUrl: string | null
    userId: string | null
    volunteerRefId: string | null
  }

  export type BeneficiariesCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    birthDate: number
    phone: number
    address: number
    city: number
    postalCode: number
    familySituation: number
    housing: number
    professionalSituation: number
    monthlyIncome: number
    needs: number
    photoUrl: number
    userId: number
    volunteerRefId: number
    _all: number
  }


  export type BeneficiariesAvgAggregateInputType = {
    monthlyIncome?: true
  }

  export type BeneficiariesSumAggregateInputType = {
    monthlyIncome?: true
  }

  export type BeneficiariesMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    phone?: true
    address?: true
    city?: true
    postalCode?: true
    familySituation?: true
    housing?: true
    professionalSituation?: true
    monthlyIncome?: true
    photoUrl?: true
    userId?: true
    volunteerRefId?: true
  }

  export type BeneficiariesMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    phone?: true
    address?: true
    city?: true
    postalCode?: true
    familySituation?: true
    housing?: true
    professionalSituation?: true
    monthlyIncome?: true
    photoUrl?: true
    userId?: true
    volunteerRefId?: true
  }

  export type BeneficiariesCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    phone?: true
    address?: true
    city?: true
    postalCode?: true
    familySituation?: true
    housing?: true
    professionalSituation?: true
    monthlyIncome?: true
    needs?: true
    photoUrl?: true
    userId?: true
    volunteerRefId?: true
    _all?: true
  }

  export type BeneficiariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficiaries to aggregate.
     */
    where?: beneficiariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: beneficiariesOrderByWithRelationInput | beneficiariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: beneficiariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned beneficiaries
    **/
    _count?: true | BeneficiariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeneficiariesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeneficiariesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiariesMaxAggregateInputType
  }

  export type GetBeneficiariesAggregateType<T extends BeneficiariesAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiaries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiaries[P]>
      : GetScalarType<T[P], AggregateBeneficiaries[P]>
  }




  export type beneficiariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: beneficiariesWhereInput
    orderBy?: beneficiariesOrderByWithAggregationInput | beneficiariesOrderByWithAggregationInput[]
    by: BeneficiariesScalarFieldEnum[] | BeneficiariesScalarFieldEnum
    having?: beneficiariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiariesCountAggregateInputType | true
    _avg?: BeneficiariesAvgAggregateInputType
    _sum?: BeneficiariesSumAggregateInputType
    _min?: BeneficiariesMinAggregateInputType
    _max?: BeneficiariesMaxAggregateInputType
  }

  export type BeneficiariesGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    birthDate: Date | null
    phone: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    familySituation: string | null
    housing: string | null
    professionalSituation: string | null
    monthlyIncome: number | null
    needs: JsonValue | null
    photoUrl: string | null
    userId: string
    volunteerRefId: string | null
    _count: BeneficiariesCountAggregateOutputType | null
    _avg: BeneficiariesAvgAggregateOutputType | null
    _sum: BeneficiariesSumAggregateOutputType | null
    _min: BeneficiariesMinAggregateOutputType | null
    _max: BeneficiariesMaxAggregateOutputType | null
  }

  type GetBeneficiariesGroupByPayload<T extends beneficiariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiariesGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiariesGroupByOutputType[P]>
        }
      >
    >


  export type beneficiariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    familySituation?: boolean
    housing?: boolean
    professionalSituation?: boolean
    monthlyIncome?: boolean
    needs?: boolean
    photoUrl?: boolean
    userId?: boolean
    volunteerRefId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    volunteers?: boolean | beneficiaries$volunteersArgs<ExtArgs>
    diagnostics?: boolean | beneficiaries$diagnosticsArgs<ExtArgs>
    face_embeddings?: boolean | beneficiaries$face_embeddingsArgs<ExtArgs>
    _count?: boolean | BeneficiariesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiaries"]>

  export type beneficiariesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    familySituation?: boolean
    housing?: boolean
    professionalSituation?: boolean
    monthlyIncome?: boolean
    needs?: boolean
    photoUrl?: boolean
    userId?: boolean
    volunteerRefId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    volunteers?: boolean | beneficiaries$volunteersArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiaries"]>

  export type beneficiariesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    familySituation?: boolean
    housing?: boolean
    professionalSituation?: boolean
    monthlyIncome?: boolean
    needs?: boolean
    photoUrl?: boolean
    userId?: boolean
    volunteerRefId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    volunteers?: boolean | beneficiaries$volunteersArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiaries"]>

  export type beneficiariesSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    familySituation?: boolean
    housing?: boolean
    professionalSituation?: boolean
    monthlyIncome?: boolean
    needs?: boolean
    photoUrl?: boolean
    userId?: boolean
    volunteerRefId?: boolean
  }

  export type beneficiariesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "birthDate" | "phone" | "address" | "city" | "postalCode" | "familySituation" | "housing" | "professionalSituation" | "monthlyIncome" | "needs" | "photoUrl" | "userId" | "volunteerRefId", ExtArgs["result"]["beneficiaries"]>
  export type beneficiariesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    volunteers?: boolean | beneficiaries$volunteersArgs<ExtArgs>
    diagnostics?: boolean | beneficiaries$diagnosticsArgs<ExtArgs>
    face_embeddings?: boolean | beneficiaries$face_embeddingsArgs<ExtArgs>
    _count?: boolean | BeneficiariesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type beneficiariesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    volunteers?: boolean | beneficiaries$volunteersArgs<ExtArgs>
  }
  export type beneficiariesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    volunteers?: boolean | beneficiaries$volunteersArgs<ExtArgs>
  }

  export type $beneficiariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "beneficiaries"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      volunteers: Prisma.$volunteersPayload<ExtArgs> | null
      diagnostics: Prisma.$diagnosticsPayload<ExtArgs>[]
      face_embeddings: Prisma.$face_embeddingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      birthDate: Date | null
      phone: string | null
      address: string | null
      city: string | null
      postalCode: string | null
      familySituation: string | null
      housing: string | null
      professionalSituation: string | null
      monthlyIncome: number | null
      needs: Prisma.JsonValue | null
      photoUrl: string | null
      userId: string
      volunteerRefId: string | null
    }, ExtArgs["result"]["beneficiaries"]>
    composites: {}
  }

  type beneficiariesGetPayload<S extends boolean | null | undefined | beneficiariesDefaultArgs> = $Result.GetResult<Prisma.$beneficiariesPayload, S>

  type beneficiariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<beneficiariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeneficiariesCountAggregateInputType | true
    }

  export interface beneficiariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['beneficiaries'], meta: { name: 'beneficiaries' } }
    /**
     * Find zero or one Beneficiaries that matches the filter.
     * @param {beneficiariesFindUniqueArgs} args - Arguments to find a Beneficiaries
     * @example
     * // Get one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends beneficiariesFindUniqueArgs>(args: SelectSubset<T, beneficiariesFindUniqueArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Beneficiaries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {beneficiariesFindUniqueOrThrowArgs} args - Arguments to find a Beneficiaries
     * @example
     * // Get one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends beneficiariesFindUniqueOrThrowArgs>(args: SelectSubset<T, beneficiariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiariesFindFirstArgs} args - Arguments to find a Beneficiaries
     * @example
     * // Get one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends beneficiariesFindFirstArgs>(args?: SelectSubset<T, beneficiariesFindFirstArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beneficiaries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiariesFindFirstOrThrowArgs} args - Arguments to find a Beneficiaries
     * @example
     * // Get one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends beneficiariesFindFirstOrThrowArgs>(args?: SelectSubset<T, beneficiariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findMany()
     * 
     * // Get first 10 Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beneficiariesWithIdOnly = await prisma.beneficiaries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends beneficiariesFindManyArgs>(args?: SelectSubset<T, beneficiariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Beneficiaries.
     * @param {beneficiariesCreateArgs} args - Arguments to create a Beneficiaries.
     * @example
     * // Create one Beneficiaries
     * const Beneficiaries = await prisma.beneficiaries.create({
     *   data: {
     *     // ... data to create a Beneficiaries
     *   }
     * })
     * 
     */
    create<T extends beneficiariesCreateArgs>(args: SelectSubset<T, beneficiariesCreateArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beneficiaries.
     * @param {beneficiariesCreateManyArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends beneficiariesCreateManyArgs>(args?: SelectSubset<T, beneficiariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beneficiaries and returns the data saved in the database.
     * @param {beneficiariesCreateManyAndReturnArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beneficiaries and only return the `id`
     * const beneficiariesWithIdOnly = await prisma.beneficiaries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends beneficiariesCreateManyAndReturnArgs>(args?: SelectSubset<T, beneficiariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Beneficiaries.
     * @param {beneficiariesDeleteArgs} args - Arguments to delete one Beneficiaries.
     * @example
     * // Delete one Beneficiaries
     * const Beneficiaries = await prisma.beneficiaries.delete({
     *   where: {
     *     // ... filter to delete one Beneficiaries
     *   }
     * })
     * 
     */
    delete<T extends beneficiariesDeleteArgs>(args: SelectSubset<T, beneficiariesDeleteArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Beneficiaries.
     * @param {beneficiariesUpdateArgs} args - Arguments to update one Beneficiaries.
     * @example
     * // Update one Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends beneficiariesUpdateArgs>(args: SelectSubset<T, beneficiariesUpdateArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beneficiaries.
     * @param {beneficiariesDeleteManyArgs} args - Arguments to filter Beneficiaries to delete.
     * @example
     * // Delete a few Beneficiaries
     * const { count } = await prisma.beneficiaries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends beneficiariesDeleteManyArgs>(args?: SelectSubset<T, beneficiariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends beneficiariesUpdateManyArgs>(args: SelectSubset<T, beneficiariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries and returns the data updated in the database.
     * @param {beneficiariesUpdateManyAndReturnArgs} args - Arguments to update many Beneficiaries.
     * @example
     * // Update many Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Beneficiaries and only return the `id`
     * const beneficiariesWithIdOnly = await prisma.beneficiaries.updateManyAndReturn({
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
    updateManyAndReturn<T extends beneficiariesUpdateManyAndReturnArgs>(args: SelectSubset<T, beneficiariesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Beneficiaries.
     * @param {beneficiariesUpsertArgs} args - Arguments to update or create a Beneficiaries.
     * @example
     * // Update or create a Beneficiaries
     * const beneficiaries = await prisma.beneficiaries.upsert({
     *   create: {
     *     // ... data to create a Beneficiaries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiaries we want to update
     *   }
     * })
     */
    upsert<T extends beneficiariesUpsertArgs>(args: SelectSubset<T, beneficiariesUpsertArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiariesCountArgs} args - Arguments to filter Beneficiaries to count.
     * @example
     * // Count the number of Beneficiaries
     * const count = await prisma.beneficiaries.count({
     *   where: {
     *     // ... the filter for the Beneficiaries we want to count
     *   }
     * })
    **/
    count<T extends beneficiariesCountArgs>(
      args?: Subset<T, beneficiariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeneficiariesAggregateArgs>(args: Subset<T, BeneficiariesAggregateArgs>): Prisma.PrismaPromise<GetBeneficiariesAggregateType<T>>

    /**
     * Group by Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiariesGroupByArgs} args - Group by arguments.
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
      T extends beneficiariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: beneficiariesGroupByArgs['orderBy'] }
        : { orderBy?: beneficiariesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, beneficiariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the beneficiaries model
   */
  readonly fields: beneficiariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for beneficiaries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__beneficiariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volunteers<T extends beneficiaries$volunteersArgs<ExtArgs> = {}>(args?: Subset<T, beneficiaries$volunteersArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    diagnostics<T extends beneficiaries$diagnosticsArgs<ExtArgs> = {}>(args?: Subset<T, beneficiaries$diagnosticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    face_embeddings<T extends beneficiaries$face_embeddingsArgs<ExtArgs> = {}>(args?: Subset<T, beneficiaries$face_embeddingsArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the beneficiaries model
   */
  interface beneficiariesFieldRefs {
    readonly id: FieldRef<"beneficiaries", 'String'>
    readonly firstName: FieldRef<"beneficiaries", 'String'>
    readonly lastName: FieldRef<"beneficiaries", 'String'>
    readonly birthDate: FieldRef<"beneficiaries", 'DateTime'>
    readonly phone: FieldRef<"beneficiaries", 'String'>
    readonly address: FieldRef<"beneficiaries", 'String'>
    readonly city: FieldRef<"beneficiaries", 'String'>
    readonly postalCode: FieldRef<"beneficiaries", 'String'>
    readonly familySituation: FieldRef<"beneficiaries", 'String'>
    readonly housing: FieldRef<"beneficiaries", 'String'>
    readonly professionalSituation: FieldRef<"beneficiaries", 'String'>
    readonly monthlyIncome: FieldRef<"beneficiaries", 'Float'>
    readonly needs: FieldRef<"beneficiaries", 'Json'>
    readonly photoUrl: FieldRef<"beneficiaries", 'String'>
    readonly userId: FieldRef<"beneficiaries", 'String'>
    readonly volunteerRefId: FieldRef<"beneficiaries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * beneficiaries findUnique
   */
  export type beneficiariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which beneficiaries to fetch.
     */
    where: beneficiariesWhereUniqueInput
  }

  /**
   * beneficiaries findUniqueOrThrow
   */
  export type beneficiariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which beneficiaries to fetch.
     */
    where: beneficiariesWhereUniqueInput
  }

  /**
   * beneficiaries findFirst
   */
  export type beneficiariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which beneficiaries to fetch.
     */
    where?: beneficiariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: beneficiariesOrderByWithRelationInput | beneficiariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiaries.
     */
    cursor?: beneficiariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiaries.
     */
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * beneficiaries findFirstOrThrow
   */
  export type beneficiariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which beneficiaries to fetch.
     */
    where?: beneficiariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: beneficiariesOrderByWithRelationInput | beneficiariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiaries.
     */
    cursor?: beneficiariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiaries.
     */
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * beneficiaries findMany
   */
  export type beneficiariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * Filter, which beneficiaries to fetch.
     */
    where?: beneficiariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: beneficiariesOrderByWithRelationInput | beneficiariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing beneficiaries.
     */
    cursor?: beneficiariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * beneficiaries create
   */
  export type beneficiariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * The data needed to create a beneficiaries.
     */
    data: XOR<beneficiariesCreateInput, beneficiariesUncheckedCreateInput>
  }

  /**
   * beneficiaries createMany
   */
  export type beneficiariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many beneficiaries.
     */
    data: beneficiariesCreateManyInput | beneficiariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * beneficiaries createManyAndReturn
   */
  export type beneficiariesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * The data used to create many beneficiaries.
     */
    data: beneficiariesCreateManyInput | beneficiariesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * beneficiaries update
   */
  export type beneficiariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * The data needed to update a beneficiaries.
     */
    data: XOR<beneficiariesUpdateInput, beneficiariesUncheckedUpdateInput>
    /**
     * Choose, which beneficiaries to update.
     */
    where: beneficiariesWhereUniqueInput
  }

  /**
   * beneficiaries updateMany
   */
  export type beneficiariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update beneficiaries.
     */
    data: XOR<beneficiariesUpdateManyMutationInput, beneficiariesUncheckedUpdateManyInput>
    /**
     * Filter which beneficiaries to update
     */
    where?: beneficiariesWhereInput
    /**
     * Limit how many beneficiaries to update.
     */
    limit?: number
  }

  /**
   * beneficiaries updateManyAndReturn
   */
  export type beneficiariesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * The data used to update beneficiaries.
     */
    data: XOR<beneficiariesUpdateManyMutationInput, beneficiariesUncheckedUpdateManyInput>
    /**
     * Filter which beneficiaries to update
     */
    where?: beneficiariesWhereInput
    /**
     * Limit how many beneficiaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * beneficiaries upsert
   */
  export type beneficiariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * The filter to search for the beneficiaries to update in case it exists.
     */
    where: beneficiariesWhereUniqueInput
    /**
     * In case the beneficiaries found by the `where` argument doesn't exist, create a new beneficiaries with this data.
     */
    create: XOR<beneficiariesCreateInput, beneficiariesUncheckedCreateInput>
    /**
     * In case the beneficiaries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<beneficiariesUpdateInput, beneficiariesUncheckedUpdateInput>
  }

  /**
   * beneficiaries delete
   */
  export type beneficiariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    /**
     * Filter which beneficiaries to delete.
     */
    where: beneficiariesWhereUniqueInput
  }

  /**
   * beneficiaries deleteMany
   */
  export type beneficiariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficiaries to delete
     */
    where?: beneficiariesWhereInput
    /**
     * Limit how many beneficiaries to delete.
     */
    limit?: number
  }

  /**
   * beneficiaries.volunteers
   */
  export type beneficiaries$volunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    where?: volunteersWhereInput
  }

  /**
   * beneficiaries.diagnostics
   */
  export type beneficiaries$diagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    where?: diagnosticsWhereInput
    orderBy?: diagnosticsOrderByWithRelationInput | diagnosticsOrderByWithRelationInput[]
    cursor?: diagnosticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticsScalarFieldEnum | DiagnosticsScalarFieldEnum[]
  }

  /**
   * beneficiaries.face_embeddings
   */
  export type beneficiaries$face_embeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    where?: face_embeddingsWhereInput
  }

  /**
   * beneficiaries without action
   */
  export type beneficiariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
  }


  /**
   * Model diagnostics
   */

  export type AggregateDiagnostics = {
    _count: DiagnosticsCountAggregateOutputType | null
    _min: DiagnosticsMinAggregateOutputType | null
    _max: DiagnosticsMaxAggregateOutputType | null
  }

  export type DiagnosticsMinAggregateOutputType = {
    id: string | null
    diagnosticDate: Date | null
    status: $Enums.DiagnosticStatus | null
    nextSteps: string | null
    pdfUrl: string | null
    version: string | null
    beneficiaryId: string | null
    volunteerId: string | null
  }

  export type DiagnosticsMaxAggregateOutputType = {
    id: string | null
    diagnosticDate: Date | null
    status: $Enums.DiagnosticStatus | null
    nextSteps: string | null
    pdfUrl: string | null
    version: string | null
    beneficiaryId: string | null
    volunteerId: string | null
  }

  export type DiagnosticsCountAggregateOutputType = {
    id: number
    diagnosticDate: number
    status: number
    formResponses: number
    results: number
    recommendations: number
    nextSteps: number
    pdfUrl: number
    version: number
    beneficiaryId: number
    volunteerId: number
    _all: number
  }


  export type DiagnosticsMinAggregateInputType = {
    id?: true
    diagnosticDate?: true
    status?: true
    nextSteps?: true
    pdfUrl?: true
    version?: true
    beneficiaryId?: true
    volunteerId?: true
  }

  export type DiagnosticsMaxAggregateInputType = {
    id?: true
    diagnosticDate?: true
    status?: true
    nextSteps?: true
    pdfUrl?: true
    version?: true
    beneficiaryId?: true
    volunteerId?: true
  }

  export type DiagnosticsCountAggregateInputType = {
    id?: true
    diagnosticDate?: true
    status?: true
    formResponses?: true
    results?: true
    recommendations?: true
    nextSteps?: true
    pdfUrl?: true
    version?: true
    beneficiaryId?: true
    volunteerId?: true
    _all?: true
  }

  export type DiagnosticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnostics to aggregate.
     */
    where?: diagnosticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnostics to fetch.
     */
    orderBy?: diagnosticsOrderByWithRelationInput | diagnosticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diagnosticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diagnostics
    **/
    _count?: true | DiagnosticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticsMaxAggregateInputType
  }

  export type GetDiagnosticsAggregateType<T extends DiagnosticsAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnostics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnostics[P]>
      : GetScalarType<T[P], AggregateDiagnostics[P]>
  }




  export type diagnosticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosticsWhereInput
    orderBy?: diagnosticsOrderByWithAggregationInput | diagnosticsOrderByWithAggregationInput[]
    by: DiagnosticsScalarFieldEnum[] | DiagnosticsScalarFieldEnum
    having?: diagnosticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticsCountAggregateInputType | true
    _min?: DiagnosticsMinAggregateInputType
    _max?: DiagnosticsMaxAggregateInputType
  }

  export type DiagnosticsGroupByOutputType = {
    id: string
    diagnosticDate: Date
    status: $Enums.DiagnosticStatus
    formResponses: JsonValue | null
    results: JsonValue | null
    recommendations: JsonValue | null
    nextSteps: string | null
    pdfUrl: string | null
    version: string | null
    beneficiaryId: string
    volunteerId: string | null
    _count: DiagnosticsCountAggregateOutputType | null
    _min: DiagnosticsMinAggregateOutputType | null
    _max: DiagnosticsMaxAggregateOutputType | null
  }

  type GetDiagnosticsGroupByPayload<T extends diagnosticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticsGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticsGroupByOutputType[P]>
        }
      >
    >


  export type diagnosticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosticDate?: boolean
    status?: boolean
    formResponses?: boolean
    results?: boolean
    recommendations?: boolean
    nextSteps?: boolean
    pdfUrl?: boolean
    version?: boolean
    beneficiaryId?: boolean
    volunteerId?: boolean
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
    volunteers?: boolean | diagnostics$volunteersArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostics"]>

  export type diagnosticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosticDate?: boolean
    status?: boolean
    formResponses?: boolean
    results?: boolean
    recommendations?: boolean
    nextSteps?: boolean
    pdfUrl?: boolean
    version?: boolean
    beneficiaryId?: boolean
    volunteerId?: boolean
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
    volunteers?: boolean | diagnostics$volunteersArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostics"]>

  export type diagnosticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosticDate?: boolean
    status?: boolean
    formResponses?: boolean
    results?: boolean
    recommendations?: boolean
    nextSteps?: boolean
    pdfUrl?: boolean
    version?: boolean
    beneficiaryId?: boolean
    volunteerId?: boolean
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
    volunteers?: boolean | diagnostics$volunteersArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostics"]>

  export type diagnosticsSelectScalar = {
    id?: boolean
    diagnosticDate?: boolean
    status?: boolean
    formResponses?: boolean
    results?: boolean
    recommendations?: boolean
    nextSteps?: boolean
    pdfUrl?: boolean
    version?: boolean
    beneficiaryId?: boolean
    volunteerId?: boolean
  }

  export type diagnosticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diagnosticDate" | "status" | "formResponses" | "results" | "recommendations" | "nextSteps" | "pdfUrl" | "version" | "beneficiaryId" | "volunteerId", ExtArgs["result"]["diagnostics"]>
  export type diagnosticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
    volunteers?: boolean | diagnostics$volunteersArgs<ExtArgs>
  }
  export type diagnosticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
    volunteers?: boolean | diagnostics$volunteersArgs<ExtArgs>
  }
  export type diagnosticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
    volunteers?: boolean | diagnostics$volunteersArgs<ExtArgs>
  }

  export type $diagnosticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diagnostics"
    objects: {
      beneficiaries: Prisma.$beneficiariesPayload<ExtArgs>
      volunteers: Prisma.$volunteersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      diagnosticDate: Date
      status: $Enums.DiagnosticStatus
      formResponses: Prisma.JsonValue | null
      results: Prisma.JsonValue | null
      recommendations: Prisma.JsonValue | null
      nextSteps: string | null
      pdfUrl: string | null
      version: string | null
      beneficiaryId: string
      volunteerId: string | null
    }, ExtArgs["result"]["diagnostics"]>
    composites: {}
  }

  type diagnosticsGetPayload<S extends boolean | null | undefined | diagnosticsDefaultArgs> = $Result.GetResult<Prisma.$diagnosticsPayload, S>

  type diagnosticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<diagnosticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticsCountAggregateInputType | true
    }

  export interface diagnosticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diagnostics'], meta: { name: 'diagnostics' } }
    /**
     * Find zero or one Diagnostics that matches the filter.
     * @param {diagnosticsFindUniqueArgs} args - Arguments to find a Diagnostics
     * @example
     * // Get one Diagnostics
     * const diagnostics = await prisma.diagnostics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diagnosticsFindUniqueArgs>(args: SelectSubset<T, diagnosticsFindUniqueArgs<ExtArgs>>): Prisma__diagnosticsClient<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnostics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {diagnosticsFindUniqueOrThrowArgs} args - Arguments to find a Diagnostics
     * @example
     * // Get one Diagnostics
     * const diagnostics = await prisma.diagnostics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diagnosticsFindUniqueOrThrowArgs>(args: SelectSubset<T, diagnosticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diagnosticsClient<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticsFindFirstArgs} args - Arguments to find a Diagnostics
     * @example
     * // Get one Diagnostics
     * const diagnostics = await prisma.diagnostics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diagnosticsFindFirstArgs>(args?: SelectSubset<T, diagnosticsFindFirstArgs<ExtArgs>>): Prisma__diagnosticsClient<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticsFindFirstOrThrowArgs} args - Arguments to find a Diagnostics
     * @example
     * // Get one Diagnostics
     * const diagnostics = await prisma.diagnostics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diagnosticsFindFirstOrThrowArgs>(args?: SelectSubset<T, diagnosticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__diagnosticsClient<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnostics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnostics
     * const diagnostics = await prisma.diagnostics.findMany()
     * 
     * // Get first 10 Diagnostics
     * const diagnostics = await prisma.diagnostics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticsWithIdOnly = await prisma.diagnostics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends diagnosticsFindManyArgs>(args?: SelectSubset<T, diagnosticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnostics.
     * @param {diagnosticsCreateArgs} args - Arguments to create a Diagnostics.
     * @example
     * // Create one Diagnostics
     * const Diagnostics = await prisma.diagnostics.create({
     *   data: {
     *     // ... data to create a Diagnostics
     *   }
     * })
     * 
     */
    create<T extends diagnosticsCreateArgs>(args: SelectSubset<T, diagnosticsCreateArgs<ExtArgs>>): Prisma__diagnosticsClient<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnostics.
     * @param {diagnosticsCreateManyArgs} args - Arguments to create many Diagnostics.
     * @example
     * // Create many Diagnostics
     * const diagnostics = await prisma.diagnostics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diagnosticsCreateManyArgs>(args?: SelectSubset<T, diagnosticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnostics and returns the data saved in the database.
     * @param {diagnosticsCreateManyAndReturnArgs} args - Arguments to create many Diagnostics.
     * @example
     * // Create many Diagnostics
     * const diagnostics = await prisma.diagnostics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnostics and only return the `id`
     * const diagnosticsWithIdOnly = await prisma.diagnostics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends diagnosticsCreateManyAndReturnArgs>(args?: SelectSubset<T, diagnosticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnostics.
     * @param {diagnosticsDeleteArgs} args - Arguments to delete one Diagnostics.
     * @example
     * // Delete one Diagnostics
     * const Diagnostics = await prisma.diagnostics.delete({
     *   where: {
     *     // ... filter to delete one Diagnostics
     *   }
     * })
     * 
     */
    delete<T extends diagnosticsDeleteArgs>(args: SelectSubset<T, diagnosticsDeleteArgs<ExtArgs>>): Prisma__diagnosticsClient<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnostics.
     * @param {diagnosticsUpdateArgs} args - Arguments to update one Diagnostics.
     * @example
     * // Update one Diagnostics
     * const diagnostics = await prisma.diagnostics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends diagnosticsUpdateArgs>(args: SelectSubset<T, diagnosticsUpdateArgs<ExtArgs>>): Prisma__diagnosticsClient<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnostics.
     * @param {diagnosticsDeleteManyArgs} args - Arguments to filter Diagnostics to delete.
     * @example
     * // Delete a few Diagnostics
     * const { count } = await prisma.diagnostics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diagnosticsDeleteManyArgs>(args?: SelectSubset<T, diagnosticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnostics
     * const diagnostics = await prisma.diagnostics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends diagnosticsUpdateManyArgs>(args: SelectSubset<T, diagnosticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnostics and returns the data updated in the database.
     * @param {diagnosticsUpdateManyAndReturnArgs} args - Arguments to update many Diagnostics.
     * @example
     * // Update many Diagnostics
     * const diagnostics = await prisma.diagnostics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnostics and only return the `id`
     * const diagnosticsWithIdOnly = await prisma.diagnostics.updateManyAndReturn({
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
    updateManyAndReturn<T extends diagnosticsUpdateManyAndReturnArgs>(args: SelectSubset<T, diagnosticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnostics.
     * @param {diagnosticsUpsertArgs} args - Arguments to update or create a Diagnostics.
     * @example
     * // Update or create a Diagnostics
     * const diagnostics = await prisma.diagnostics.upsert({
     *   create: {
     *     // ... data to create a Diagnostics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnostics we want to update
     *   }
     * })
     */
    upsert<T extends diagnosticsUpsertArgs>(args: SelectSubset<T, diagnosticsUpsertArgs<ExtArgs>>): Prisma__diagnosticsClient<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticsCountArgs} args - Arguments to filter Diagnostics to count.
     * @example
     * // Count the number of Diagnostics
     * const count = await prisma.diagnostics.count({
     *   where: {
     *     // ... the filter for the Diagnostics we want to count
     *   }
     * })
    **/
    count<T extends diagnosticsCountArgs>(
      args?: Subset<T, diagnosticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticsAggregateArgs>(args: Subset<T, DiagnosticsAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticsAggregateType<T>>

    /**
     * Group by Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticsGroupByArgs} args - Group by arguments.
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
      T extends diagnosticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diagnosticsGroupByArgs['orderBy'] }
        : { orderBy?: diagnosticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, diagnosticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diagnostics model
   */
  readonly fields: diagnosticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diagnostics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diagnosticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    beneficiaries<T extends beneficiariesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, beneficiariesDefaultArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volunteers<T extends diagnostics$volunteersArgs<ExtArgs> = {}>(args?: Subset<T, diagnostics$volunteersArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the diagnostics model
   */
  interface diagnosticsFieldRefs {
    readonly id: FieldRef<"diagnostics", 'String'>
    readonly diagnosticDate: FieldRef<"diagnostics", 'DateTime'>
    readonly status: FieldRef<"diagnostics", 'DiagnosticStatus'>
    readonly formResponses: FieldRef<"diagnostics", 'Json'>
    readonly results: FieldRef<"diagnostics", 'Json'>
    readonly recommendations: FieldRef<"diagnostics", 'Json'>
    readonly nextSteps: FieldRef<"diagnostics", 'String'>
    readonly pdfUrl: FieldRef<"diagnostics", 'String'>
    readonly version: FieldRef<"diagnostics", 'String'>
    readonly beneficiaryId: FieldRef<"diagnostics", 'String'>
    readonly volunteerId: FieldRef<"diagnostics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * diagnostics findUnique
   */
  export type diagnosticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * Filter, which diagnostics to fetch.
     */
    where: diagnosticsWhereUniqueInput
  }

  /**
   * diagnostics findUniqueOrThrow
   */
  export type diagnosticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * Filter, which diagnostics to fetch.
     */
    where: diagnosticsWhereUniqueInput
  }

  /**
   * diagnostics findFirst
   */
  export type diagnosticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * Filter, which diagnostics to fetch.
     */
    where?: diagnosticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnostics to fetch.
     */
    orderBy?: diagnosticsOrderByWithRelationInput | diagnosticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnostics.
     */
    cursor?: diagnosticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnostics.
     */
    distinct?: DiagnosticsScalarFieldEnum | DiagnosticsScalarFieldEnum[]
  }

  /**
   * diagnostics findFirstOrThrow
   */
  export type diagnosticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * Filter, which diagnostics to fetch.
     */
    where?: diagnosticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnostics to fetch.
     */
    orderBy?: diagnosticsOrderByWithRelationInput | diagnosticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnostics.
     */
    cursor?: diagnosticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnostics.
     */
    distinct?: DiagnosticsScalarFieldEnum | DiagnosticsScalarFieldEnum[]
  }

  /**
   * diagnostics findMany
   */
  export type diagnosticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * Filter, which diagnostics to fetch.
     */
    where?: diagnosticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnostics to fetch.
     */
    orderBy?: diagnosticsOrderByWithRelationInput | diagnosticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diagnostics.
     */
    cursor?: diagnosticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnostics.
     */
    skip?: number
    distinct?: DiagnosticsScalarFieldEnum | DiagnosticsScalarFieldEnum[]
  }

  /**
   * diagnostics create
   */
  export type diagnosticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * The data needed to create a diagnostics.
     */
    data: XOR<diagnosticsCreateInput, diagnosticsUncheckedCreateInput>
  }

  /**
   * diagnostics createMany
   */
  export type diagnosticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diagnostics.
     */
    data: diagnosticsCreateManyInput | diagnosticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diagnostics createManyAndReturn
   */
  export type diagnosticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * The data used to create many diagnostics.
     */
    data: diagnosticsCreateManyInput | diagnosticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * diagnostics update
   */
  export type diagnosticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * The data needed to update a diagnostics.
     */
    data: XOR<diagnosticsUpdateInput, diagnosticsUncheckedUpdateInput>
    /**
     * Choose, which diagnostics to update.
     */
    where: diagnosticsWhereUniqueInput
  }

  /**
   * diagnostics updateMany
   */
  export type diagnosticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diagnostics.
     */
    data: XOR<diagnosticsUpdateManyMutationInput, diagnosticsUncheckedUpdateManyInput>
    /**
     * Filter which diagnostics to update
     */
    where?: diagnosticsWhereInput
    /**
     * Limit how many diagnostics to update.
     */
    limit?: number
  }

  /**
   * diagnostics updateManyAndReturn
   */
  export type diagnosticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * The data used to update diagnostics.
     */
    data: XOR<diagnosticsUpdateManyMutationInput, diagnosticsUncheckedUpdateManyInput>
    /**
     * Filter which diagnostics to update
     */
    where?: diagnosticsWhereInput
    /**
     * Limit how many diagnostics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * diagnostics upsert
   */
  export type diagnosticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * The filter to search for the diagnostics to update in case it exists.
     */
    where: diagnosticsWhereUniqueInput
    /**
     * In case the diagnostics found by the `where` argument doesn't exist, create a new diagnostics with this data.
     */
    create: XOR<diagnosticsCreateInput, diagnosticsUncheckedCreateInput>
    /**
     * In case the diagnostics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diagnosticsUpdateInput, diagnosticsUncheckedUpdateInput>
  }

  /**
   * diagnostics delete
   */
  export type diagnosticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    /**
     * Filter which diagnostics to delete.
     */
    where: diagnosticsWhereUniqueInput
  }

  /**
   * diagnostics deleteMany
   */
  export type diagnosticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnostics to delete
     */
    where?: diagnosticsWhereInput
    /**
     * Limit how many diagnostics to delete.
     */
    limit?: number
  }

  /**
   * diagnostics.volunteers
   */
  export type diagnostics$volunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    where?: volunteersWhereInput
  }

  /**
   * diagnostics without action
   */
  export type diagnosticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
  }


  /**
   * Model face_embeddings
   */

  export type AggregateFace_embeddings = {
    _count: Face_embeddingsCountAggregateOutputType | null
    _min: Face_embeddingsMinAggregateOutputType | null
    _max: Face_embeddingsMaxAggregateOutputType | null
  }

  export type Face_embeddingsMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    createdAt: Date | null
    beneficiaryId: string | null
  }

  export type Face_embeddingsMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    createdAt: Date | null
    beneficiaryId: string | null
  }

  export type Face_embeddingsCountAggregateOutputType = {
    id: number
    imageUrl: number
    embedding: number
    createdAt: number
    beneficiaryId: number
    _all: number
  }


  export type Face_embeddingsMinAggregateInputType = {
    id?: true
    imageUrl?: true
    createdAt?: true
    beneficiaryId?: true
  }

  export type Face_embeddingsMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    createdAt?: true
    beneficiaryId?: true
  }

  export type Face_embeddingsCountAggregateInputType = {
    id?: true
    imageUrl?: true
    embedding?: true
    createdAt?: true
    beneficiaryId?: true
    _all?: true
  }

  export type Face_embeddingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which face_embeddings to aggregate.
     */
    where?: face_embeddingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of face_embeddings to fetch.
     */
    orderBy?: face_embeddingsOrderByWithRelationInput | face_embeddingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: face_embeddingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` face_embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` face_embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned face_embeddings
    **/
    _count?: true | Face_embeddingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Face_embeddingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Face_embeddingsMaxAggregateInputType
  }

  export type GetFace_embeddingsAggregateType<T extends Face_embeddingsAggregateArgs> = {
        [P in keyof T & keyof AggregateFace_embeddings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFace_embeddings[P]>
      : GetScalarType<T[P], AggregateFace_embeddings[P]>
  }




  export type face_embeddingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: face_embeddingsWhereInput
    orderBy?: face_embeddingsOrderByWithAggregationInput | face_embeddingsOrderByWithAggregationInput[]
    by: Face_embeddingsScalarFieldEnum[] | Face_embeddingsScalarFieldEnum
    having?: face_embeddingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Face_embeddingsCountAggregateInputType | true
    _min?: Face_embeddingsMinAggregateInputType
    _max?: Face_embeddingsMaxAggregateInputType
  }

  export type Face_embeddingsGroupByOutputType = {
    id: string
    imageUrl: string
    embedding: JsonValue
    createdAt: Date
    beneficiaryId: string
    _count: Face_embeddingsCountAggregateOutputType | null
    _min: Face_embeddingsMinAggregateOutputType | null
    _max: Face_embeddingsMaxAggregateOutputType | null
  }

  type GetFace_embeddingsGroupByPayload<T extends face_embeddingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Face_embeddingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Face_embeddingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Face_embeddingsGroupByOutputType[P]>
            : GetScalarType<T[P], Face_embeddingsGroupByOutputType[P]>
        }
      >
    >


  export type face_embeddingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    embedding?: boolean
    createdAt?: boolean
    beneficiaryId?: boolean
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["face_embeddings"]>

  export type face_embeddingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    embedding?: boolean
    createdAt?: boolean
    beneficiaryId?: boolean
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["face_embeddings"]>

  export type face_embeddingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    embedding?: boolean
    createdAt?: boolean
    beneficiaryId?: boolean
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["face_embeddings"]>

  export type face_embeddingsSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    embedding?: boolean
    createdAt?: boolean
    beneficiaryId?: boolean
  }

  export type face_embeddingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "embedding" | "createdAt" | "beneficiaryId", ExtArgs["result"]["face_embeddings"]>
  export type face_embeddingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
  }
  export type face_embeddingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
  }
  export type face_embeddingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaries?: boolean | beneficiariesDefaultArgs<ExtArgs>
  }

  export type $face_embeddingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "face_embeddings"
    objects: {
      beneficiaries: Prisma.$beneficiariesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      embedding: Prisma.JsonValue
      createdAt: Date
      beneficiaryId: string
    }, ExtArgs["result"]["face_embeddings"]>
    composites: {}
  }

  type face_embeddingsGetPayload<S extends boolean | null | undefined | face_embeddingsDefaultArgs> = $Result.GetResult<Prisma.$face_embeddingsPayload, S>

  type face_embeddingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<face_embeddingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Face_embeddingsCountAggregateInputType | true
    }

  export interface face_embeddingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['face_embeddings'], meta: { name: 'face_embeddings' } }
    /**
     * Find zero or one Face_embeddings that matches the filter.
     * @param {face_embeddingsFindUniqueArgs} args - Arguments to find a Face_embeddings
     * @example
     * // Get one Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends face_embeddingsFindUniqueArgs>(args: SelectSubset<T, face_embeddingsFindUniqueArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Face_embeddings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {face_embeddingsFindUniqueOrThrowArgs} args - Arguments to find a Face_embeddings
     * @example
     * // Get one Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends face_embeddingsFindUniqueOrThrowArgs>(args: SelectSubset<T, face_embeddingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Face_embeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_embeddingsFindFirstArgs} args - Arguments to find a Face_embeddings
     * @example
     * // Get one Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends face_embeddingsFindFirstArgs>(args?: SelectSubset<T, face_embeddingsFindFirstArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Face_embeddings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_embeddingsFindFirstOrThrowArgs} args - Arguments to find a Face_embeddings
     * @example
     * // Get one Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends face_embeddingsFindFirstOrThrowArgs>(args?: SelectSubset<T, face_embeddingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Face_embeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_embeddingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.findMany()
     * 
     * // Get first 10 Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const face_embeddingsWithIdOnly = await prisma.face_embeddings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends face_embeddingsFindManyArgs>(args?: SelectSubset<T, face_embeddingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Face_embeddings.
     * @param {face_embeddingsCreateArgs} args - Arguments to create a Face_embeddings.
     * @example
     * // Create one Face_embeddings
     * const Face_embeddings = await prisma.face_embeddings.create({
     *   data: {
     *     // ... data to create a Face_embeddings
     *   }
     * })
     * 
     */
    create<T extends face_embeddingsCreateArgs>(args: SelectSubset<T, face_embeddingsCreateArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Face_embeddings.
     * @param {face_embeddingsCreateManyArgs} args - Arguments to create many Face_embeddings.
     * @example
     * // Create many Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends face_embeddingsCreateManyArgs>(args?: SelectSubset<T, face_embeddingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Face_embeddings and returns the data saved in the database.
     * @param {face_embeddingsCreateManyAndReturnArgs} args - Arguments to create many Face_embeddings.
     * @example
     * // Create many Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Face_embeddings and only return the `id`
     * const face_embeddingsWithIdOnly = await prisma.face_embeddings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends face_embeddingsCreateManyAndReturnArgs>(args?: SelectSubset<T, face_embeddingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Face_embeddings.
     * @param {face_embeddingsDeleteArgs} args - Arguments to delete one Face_embeddings.
     * @example
     * // Delete one Face_embeddings
     * const Face_embeddings = await prisma.face_embeddings.delete({
     *   where: {
     *     // ... filter to delete one Face_embeddings
     *   }
     * })
     * 
     */
    delete<T extends face_embeddingsDeleteArgs>(args: SelectSubset<T, face_embeddingsDeleteArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Face_embeddings.
     * @param {face_embeddingsUpdateArgs} args - Arguments to update one Face_embeddings.
     * @example
     * // Update one Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends face_embeddingsUpdateArgs>(args: SelectSubset<T, face_embeddingsUpdateArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Face_embeddings.
     * @param {face_embeddingsDeleteManyArgs} args - Arguments to filter Face_embeddings to delete.
     * @example
     * // Delete a few Face_embeddings
     * const { count } = await prisma.face_embeddings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends face_embeddingsDeleteManyArgs>(args?: SelectSubset<T, face_embeddingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Face_embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_embeddingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends face_embeddingsUpdateManyArgs>(args: SelectSubset<T, face_embeddingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Face_embeddings and returns the data updated in the database.
     * @param {face_embeddingsUpdateManyAndReturnArgs} args - Arguments to update many Face_embeddings.
     * @example
     * // Update many Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Face_embeddings and only return the `id`
     * const face_embeddingsWithIdOnly = await prisma.face_embeddings.updateManyAndReturn({
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
    updateManyAndReturn<T extends face_embeddingsUpdateManyAndReturnArgs>(args: SelectSubset<T, face_embeddingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Face_embeddings.
     * @param {face_embeddingsUpsertArgs} args - Arguments to update or create a Face_embeddings.
     * @example
     * // Update or create a Face_embeddings
     * const face_embeddings = await prisma.face_embeddings.upsert({
     *   create: {
     *     // ... data to create a Face_embeddings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Face_embeddings we want to update
     *   }
     * })
     */
    upsert<T extends face_embeddingsUpsertArgs>(args: SelectSubset<T, face_embeddingsUpsertArgs<ExtArgs>>): Prisma__face_embeddingsClient<$Result.GetResult<Prisma.$face_embeddingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Face_embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_embeddingsCountArgs} args - Arguments to filter Face_embeddings to count.
     * @example
     * // Count the number of Face_embeddings
     * const count = await prisma.face_embeddings.count({
     *   where: {
     *     // ... the filter for the Face_embeddings we want to count
     *   }
     * })
    **/
    count<T extends face_embeddingsCountArgs>(
      args?: Subset<T, face_embeddingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Face_embeddingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Face_embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Face_embeddingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Face_embeddingsAggregateArgs>(args: Subset<T, Face_embeddingsAggregateArgs>): Prisma.PrismaPromise<GetFace_embeddingsAggregateType<T>>

    /**
     * Group by Face_embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_embeddingsGroupByArgs} args - Group by arguments.
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
      T extends face_embeddingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: face_embeddingsGroupByArgs['orderBy'] }
        : { orderBy?: face_embeddingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, face_embeddingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFace_embeddingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the face_embeddings model
   */
  readonly fields: face_embeddingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for face_embeddings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__face_embeddingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    beneficiaries<T extends beneficiariesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, beneficiariesDefaultArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the face_embeddings model
   */
  interface face_embeddingsFieldRefs {
    readonly id: FieldRef<"face_embeddings", 'String'>
    readonly imageUrl: FieldRef<"face_embeddings", 'String'>
    readonly embedding: FieldRef<"face_embeddings", 'Json'>
    readonly createdAt: FieldRef<"face_embeddings", 'DateTime'>
    readonly beneficiaryId: FieldRef<"face_embeddings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * face_embeddings findUnique
   */
  export type face_embeddingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * Filter, which face_embeddings to fetch.
     */
    where: face_embeddingsWhereUniqueInput
  }

  /**
   * face_embeddings findUniqueOrThrow
   */
  export type face_embeddingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * Filter, which face_embeddings to fetch.
     */
    where: face_embeddingsWhereUniqueInput
  }

  /**
   * face_embeddings findFirst
   */
  export type face_embeddingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * Filter, which face_embeddings to fetch.
     */
    where?: face_embeddingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of face_embeddings to fetch.
     */
    orderBy?: face_embeddingsOrderByWithRelationInput | face_embeddingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for face_embeddings.
     */
    cursor?: face_embeddingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` face_embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` face_embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of face_embeddings.
     */
    distinct?: Face_embeddingsScalarFieldEnum | Face_embeddingsScalarFieldEnum[]
  }

  /**
   * face_embeddings findFirstOrThrow
   */
  export type face_embeddingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * Filter, which face_embeddings to fetch.
     */
    where?: face_embeddingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of face_embeddings to fetch.
     */
    orderBy?: face_embeddingsOrderByWithRelationInput | face_embeddingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for face_embeddings.
     */
    cursor?: face_embeddingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` face_embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` face_embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of face_embeddings.
     */
    distinct?: Face_embeddingsScalarFieldEnum | Face_embeddingsScalarFieldEnum[]
  }

  /**
   * face_embeddings findMany
   */
  export type face_embeddingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * Filter, which face_embeddings to fetch.
     */
    where?: face_embeddingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of face_embeddings to fetch.
     */
    orderBy?: face_embeddingsOrderByWithRelationInput | face_embeddingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing face_embeddings.
     */
    cursor?: face_embeddingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` face_embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` face_embeddings.
     */
    skip?: number
    distinct?: Face_embeddingsScalarFieldEnum | Face_embeddingsScalarFieldEnum[]
  }

  /**
   * face_embeddings create
   */
  export type face_embeddingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * The data needed to create a face_embeddings.
     */
    data: XOR<face_embeddingsCreateInput, face_embeddingsUncheckedCreateInput>
  }

  /**
   * face_embeddings createMany
   */
  export type face_embeddingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many face_embeddings.
     */
    data: face_embeddingsCreateManyInput | face_embeddingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * face_embeddings createManyAndReturn
   */
  export type face_embeddingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * The data used to create many face_embeddings.
     */
    data: face_embeddingsCreateManyInput | face_embeddingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * face_embeddings update
   */
  export type face_embeddingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * The data needed to update a face_embeddings.
     */
    data: XOR<face_embeddingsUpdateInput, face_embeddingsUncheckedUpdateInput>
    /**
     * Choose, which face_embeddings to update.
     */
    where: face_embeddingsWhereUniqueInput
  }

  /**
   * face_embeddings updateMany
   */
  export type face_embeddingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update face_embeddings.
     */
    data: XOR<face_embeddingsUpdateManyMutationInput, face_embeddingsUncheckedUpdateManyInput>
    /**
     * Filter which face_embeddings to update
     */
    where?: face_embeddingsWhereInput
    /**
     * Limit how many face_embeddings to update.
     */
    limit?: number
  }

  /**
   * face_embeddings updateManyAndReturn
   */
  export type face_embeddingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * The data used to update face_embeddings.
     */
    data: XOR<face_embeddingsUpdateManyMutationInput, face_embeddingsUncheckedUpdateManyInput>
    /**
     * Filter which face_embeddings to update
     */
    where?: face_embeddingsWhereInput
    /**
     * Limit how many face_embeddings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * face_embeddings upsert
   */
  export type face_embeddingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * The filter to search for the face_embeddings to update in case it exists.
     */
    where: face_embeddingsWhereUniqueInput
    /**
     * In case the face_embeddings found by the `where` argument doesn't exist, create a new face_embeddings with this data.
     */
    create: XOR<face_embeddingsCreateInput, face_embeddingsUncheckedCreateInput>
    /**
     * In case the face_embeddings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<face_embeddingsUpdateInput, face_embeddingsUncheckedUpdateInput>
  }

  /**
   * face_embeddings delete
   */
  export type face_embeddingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
    /**
     * Filter which face_embeddings to delete.
     */
    where: face_embeddingsWhereUniqueInput
  }

  /**
   * face_embeddings deleteMany
   */
  export type face_embeddingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which face_embeddings to delete
     */
    where?: face_embeddingsWhereInput
    /**
     * Limit how many face_embeddings to delete.
     */
    limit?: number
  }

  /**
   * face_embeddings without action
   */
  export type face_embeddingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_embeddings
     */
    select?: face_embeddingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the face_embeddings
     */
    omit?: face_embeddingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: face_embeddingsInclude<ExtArgs> | null
  }


  /**
   * Model knowledge_documents
   */

  export type AggregateKnowledge_documents = {
    _count: Knowledge_documentsCountAggregateOutputType | null
    _min: Knowledge_documentsMinAggregateOutputType | null
    _max: Knowledge_documentsMaxAggregateOutputType | null
  }

  export type Knowledge_documentsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    uploadedById: string | null
  }

  export type Knowledge_documentsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    uploadedById: string | null
  }

  export type Knowledge_documentsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    tags: number
    createdAt: number
    updatedAt: number
    uploadedById: number
    _all: number
  }


  export type Knowledge_documentsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    uploadedById?: true
  }

  export type Knowledge_documentsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    uploadedById?: true
  }

  export type Knowledge_documentsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    uploadedById?: true
    _all?: true
  }

  export type Knowledge_documentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which knowledge_documents to aggregate.
     */
    where?: knowledge_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of knowledge_documents to fetch.
     */
    orderBy?: knowledge_documentsOrderByWithRelationInput | knowledge_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: knowledge_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` knowledge_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` knowledge_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned knowledge_documents
    **/
    _count?: true | Knowledge_documentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Knowledge_documentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Knowledge_documentsMaxAggregateInputType
  }

  export type GetKnowledge_documentsAggregateType<T extends Knowledge_documentsAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledge_documents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledge_documents[P]>
      : GetScalarType<T[P], AggregateKnowledge_documents[P]>
  }




  export type knowledge_documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: knowledge_documentsWhereInput
    orderBy?: knowledge_documentsOrderByWithAggregationInput | knowledge_documentsOrderByWithAggregationInput[]
    by: Knowledge_documentsScalarFieldEnum[] | Knowledge_documentsScalarFieldEnum
    having?: knowledge_documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Knowledge_documentsCountAggregateInputType | true
    _min?: Knowledge_documentsMinAggregateInputType
    _max?: Knowledge_documentsMaxAggregateInputType
  }

  export type Knowledge_documentsGroupByOutputType = {
    id: string
    title: string
    content: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
    uploadedById: string
    _count: Knowledge_documentsCountAggregateOutputType | null
    _min: Knowledge_documentsMinAggregateOutputType | null
    _max: Knowledge_documentsMaxAggregateOutputType | null
  }

  type GetKnowledge_documentsGroupByPayload<T extends knowledge_documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Knowledge_documentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Knowledge_documentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Knowledge_documentsGroupByOutputType[P]>
            : GetScalarType<T[P], Knowledge_documentsGroupByOutputType[P]>
        }
      >
    >


  export type knowledge_documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedById?: boolean
    admins?: boolean | adminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledge_documents"]>

  export type knowledge_documentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedById?: boolean
    admins?: boolean | adminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledge_documents"]>

  export type knowledge_documentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedById?: boolean
    admins?: boolean | adminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledge_documents"]>

  export type knowledge_documentsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedById?: boolean
  }

  export type knowledge_documentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "tags" | "createdAt" | "updatedAt" | "uploadedById", ExtArgs["result"]["knowledge_documents"]>
  export type knowledge_documentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | adminsDefaultArgs<ExtArgs>
  }
  export type knowledge_documentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | adminsDefaultArgs<ExtArgs>
  }
  export type knowledge_documentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | adminsDefaultArgs<ExtArgs>
  }

  export type $knowledge_documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "knowledge_documents"
    objects: {
      admins: Prisma.$adminsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      tags: string[]
      createdAt: Date
      updatedAt: Date
      uploadedById: string
    }, ExtArgs["result"]["knowledge_documents"]>
    composites: {}
  }

  type knowledge_documentsGetPayload<S extends boolean | null | undefined | knowledge_documentsDefaultArgs> = $Result.GetResult<Prisma.$knowledge_documentsPayload, S>

  type knowledge_documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<knowledge_documentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Knowledge_documentsCountAggregateInputType | true
    }

  export interface knowledge_documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['knowledge_documents'], meta: { name: 'knowledge_documents' } }
    /**
     * Find zero or one Knowledge_documents that matches the filter.
     * @param {knowledge_documentsFindUniqueArgs} args - Arguments to find a Knowledge_documents
     * @example
     * // Get one Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends knowledge_documentsFindUniqueArgs>(args: SelectSubset<T, knowledge_documentsFindUniqueArgs<ExtArgs>>): Prisma__knowledge_documentsClient<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Knowledge_documents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {knowledge_documentsFindUniqueOrThrowArgs} args - Arguments to find a Knowledge_documents
     * @example
     * // Get one Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends knowledge_documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, knowledge_documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__knowledge_documentsClient<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Knowledge_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_documentsFindFirstArgs} args - Arguments to find a Knowledge_documents
     * @example
     * // Get one Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends knowledge_documentsFindFirstArgs>(args?: SelectSubset<T, knowledge_documentsFindFirstArgs<ExtArgs>>): Prisma__knowledge_documentsClient<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Knowledge_documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_documentsFindFirstOrThrowArgs} args - Arguments to find a Knowledge_documents
     * @example
     * // Get one Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends knowledge_documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, knowledge_documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__knowledge_documentsClient<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Knowledge_documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.findMany()
     * 
     * // Get first 10 Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledge_documentsWithIdOnly = await prisma.knowledge_documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends knowledge_documentsFindManyArgs>(args?: SelectSubset<T, knowledge_documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Knowledge_documents.
     * @param {knowledge_documentsCreateArgs} args - Arguments to create a Knowledge_documents.
     * @example
     * // Create one Knowledge_documents
     * const Knowledge_documents = await prisma.knowledge_documents.create({
     *   data: {
     *     // ... data to create a Knowledge_documents
     *   }
     * })
     * 
     */
    create<T extends knowledge_documentsCreateArgs>(args: SelectSubset<T, knowledge_documentsCreateArgs<ExtArgs>>): Prisma__knowledge_documentsClient<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Knowledge_documents.
     * @param {knowledge_documentsCreateManyArgs} args - Arguments to create many Knowledge_documents.
     * @example
     * // Create many Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends knowledge_documentsCreateManyArgs>(args?: SelectSubset<T, knowledge_documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Knowledge_documents and returns the data saved in the database.
     * @param {knowledge_documentsCreateManyAndReturnArgs} args - Arguments to create many Knowledge_documents.
     * @example
     * // Create many Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Knowledge_documents and only return the `id`
     * const knowledge_documentsWithIdOnly = await prisma.knowledge_documents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends knowledge_documentsCreateManyAndReturnArgs>(args?: SelectSubset<T, knowledge_documentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Knowledge_documents.
     * @param {knowledge_documentsDeleteArgs} args - Arguments to delete one Knowledge_documents.
     * @example
     * // Delete one Knowledge_documents
     * const Knowledge_documents = await prisma.knowledge_documents.delete({
     *   where: {
     *     // ... filter to delete one Knowledge_documents
     *   }
     * })
     * 
     */
    delete<T extends knowledge_documentsDeleteArgs>(args: SelectSubset<T, knowledge_documentsDeleteArgs<ExtArgs>>): Prisma__knowledge_documentsClient<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Knowledge_documents.
     * @param {knowledge_documentsUpdateArgs} args - Arguments to update one Knowledge_documents.
     * @example
     * // Update one Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends knowledge_documentsUpdateArgs>(args: SelectSubset<T, knowledge_documentsUpdateArgs<ExtArgs>>): Prisma__knowledge_documentsClient<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Knowledge_documents.
     * @param {knowledge_documentsDeleteManyArgs} args - Arguments to filter Knowledge_documents to delete.
     * @example
     * // Delete a few Knowledge_documents
     * const { count } = await prisma.knowledge_documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends knowledge_documentsDeleteManyArgs>(args?: SelectSubset<T, knowledge_documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledge_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends knowledge_documentsUpdateManyArgs>(args: SelectSubset<T, knowledge_documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledge_documents and returns the data updated in the database.
     * @param {knowledge_documentsUpdateManyAndReturnArgs} args - Arguments to update many Knowledge_documents.
     * @example
     * // Update many Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Knowledge_documents and only return the `id`
     * const knowledge_documentsWithIdOnly = await prisma.knowledge_documents.updateManyAndReturn({
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
    updateManyAndReturn<T extends knowledge_documentsUpdateManyAndReturnArgs>(args: SelectSubset<T, knowledge_documentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Knowledge_documents.
     * @param {knowledge_documentsUpsertArgs} args - Arguments to update or create a Knowledge_documents.
     * @example
     * // Update or create a Knowledge_documents
     * const knowledge_documents = await prisma.knowledge_documents.upsert({
     *   create: {
     *     // ... data to create a Knowledge_documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Knowledge_documents we want to update
     *   }
     * })
     */
    upsert<T extends knowledge_documentsUpsertArgs>(args: SelectSubset<T, knowledge_documentsUpsertArgs<ExtArgs>>): Prisma__knowledge_documentsClient<$Result.GetResult<Prisma.$knowledge_documentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Knowledge_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_documentsCountArgs} args - Arguments to filter Knowledge_documents to count.
     * @example
     * // Count the number of Knowledge_documents
     * const count = await prisma.knowledge_documents.count({
     *   where: {
     *     // ... the filter for the Knowledge_documents we want to count
     *   }
     * })
    **/
    count<T extends knowledge_documentsCountArgs>(
      args?: Subset<T, knowledge_documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Knowledge_documentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Knowledge_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Knowledge_documentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Knowledge_documentsAggregateArgs>(args: Subset<T, Knowledge_documentsAggregateArgs>): Prisma.PrismaPromise<GetKnowledge_documentsAggregateType<T>>

    /**
     * Group by Knowledge_documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {knowledge_documentsGroupByArgs} args - Group by arguments.
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
      T extends knowledge_documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: knowledge_documentsGroupByArgs['orderBy'] }
        : { orderBy?: knowledge_documentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, knowledge_documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledge_documentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the knowledge_documents model
   */
  readonly fields: knowledge_documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for knowledge_documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__knowledge_documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends adminsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminsDefaultArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the knowledge_documents model
   */
  interface knowledge_documentsFieldRefs {
    readonly id: FieldRef<"knowledge_documents", 'String'>
    readonly title: FieldRef<"knowledge_documents", 'String'>
    readonly content: FieldRef<"knowledge_documents", 'String'>
    readonly tags: FieldRef<"knowledge_documents", 'String[]'>
    readonly createdAt: FieldRef<"knowledge_documents", 'DateTime'>
    readonly updatedAt: FieldRef<"knowledge_documents", 'DateTime'>
    readonly uploadedById: FieldRef<"knowledge_documents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * knowledge_documents findUnique
   */
  export type knowledge_documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * Filter, which knowledge_documents to fetch.
     */
    where: knowledge_documentsWhereUniqueInput
  }

  /**
   * knowledge_documents findUniqueOrThrow
   */
  export type knowledge_documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * Filter, which knowledge_documents to fetch.
     */
    where: knowledge_documentsWhereUniqueInput
  }

  /**
   * knowledge_documents findFirst
   */
  export type knowledge_documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * Filter, which knowledge_documents to fetch.
     */
    where?: knowledge_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of knowledge_documents to fetch.
     */
    orderBy?: knowledge_documentsOrderByWithRelationInput | knowledge_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for knowledge_documents.
     */
    cursor?: knowledge_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` knowledge_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` knowledge_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of knowledge_documents.
     */
    distinct?: Knowledge_documentsScalarFieldEnum | Knowledge_documentsScalarFieldEnum[]
  }

  /**
   * knowledge_documents findFirstOrThrow
   */
  export type knowledge_documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * Filter, which knowledge_documents to fetch.
     */
    where?: knowledge_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of knowledge_documents to fetch.
     */
    orderBy?: knowledge_documentsOrderByWithRelationInput | knowledge_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for knowledge_documents.
     */
    cursor?: knowledge_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` knowledge_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` knowledge_documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of knowledge_documents.
     */
    distinct?: Knowledge_documentsScalarFieldEnum | Knowledge_documentsScalarFieldEnum[]
  }

  /**
   * knowledge_documents findMany
   */
  export type knowledge_documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * Filter, which knowledge_documents to fetch.
     */
    where?: knowledge_documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of knowledge_documents to fetch.
     */
    orderBy?: knowledge_documentsOrderByWithRelationInput | knowledge_documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing knowledge_documents.
     */
    cursor?: knowledge_documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` knowledge_documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` knowledge_documents.
     */
    skip?: number
    distinct?: Knowledge_documentsScalarFieldEnum | Knowledge_documentsScalarFieldEnum[]
  }

  /**
   * knowledge_documents create
   */
  export type knowledge_documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * The data needed to create a knowledge_documents.
     */
    data: XOR<knowledge_documentsCreateInput, knowledge_documentsUncheckedCreateInput>
  }

  /**
   * knowledge_documents createMany
   */
  export type knowledge_documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many knowledge_documents.
     */
    data: knowledge_documentsCreateManyInput | knowledge_documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * knowledge_documents createManyAndReturn
   */
  export type knowledge_documentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * The data used to create many knowledge_documents.
     */
    data: knowledge_documentsCreateManyInput | knowledge_documentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * knowledge_documents update
   */
  export type knowledge_documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * The data needed to update a knowledge_documents.
     */
    data: XOR<knowledge_documentsUpdateInput, knowledge_documentsUncheckedUpdateInput>
    /**
     * Choose, which knowledge_documents to update.
     */
    where: knowledge_documentsWhereUniqueInput
  }

  /**
   * knowledge_documents updateMany
   */
  export type knowledge_documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update knowledge_documents.
     */
    data: XOR<knowledge_documentsUpdateManyMutationInput, knowledge_documentsUncheckedUpdateManyInput>
    /**
     * Filter which knowledge_documents to update
     */
    where?: knowledge_documentsWhereInput
    /**
     * Limit how many knowledge_documents to update.
     */
    limit?: number
  }

  /**
   * knowledge_documents updateManyAndReturn
   */
  export type knowledge_documentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * The data used to update knowledge_documents.
     */
    data: XOR<knowledge_documentsUpdateManyMutationInput, knowledge_documentsUncheckedUpdateManyInput>
    /**
     * Filter which knowledge_documents to update
     */
    where?: knowledge_documentsWhereInput
    /**
     * Limit how many knowledge_documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * knowledge_documents upsert
   */
  export type knowledge_documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * The filter to search for the knowledge_documents to update in case it exists.
     */
    where: knowledge_documentsWhereUniqueInput
    /**
     * In case the knowledge_documents found by the `where` argument doesn't exist, create a new knowledge_documents with this data.
     */
    create: XOR<knowledge_documentsCreateInput, knowledge_documentsUncheckedCreateInput>
    /**
     * In case the knowledge_documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<knowledge_documentsUpdateInput, knowledge_documentsUncheckedUpdateInput>
  }

  /**
   * knowledge_documents delete
   */
  export type knowledge_documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
    /**
     * Filter which knowledge_documents to delete.
     */
    where: knowledge_documentsWhereUniqueInput
  }

  /**
   * knowledge_documents deleteMany
   */
  export type knowledge_documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which knowledge_documents to delete
     */
    where?: knowledge_documentsWhereInput
    /**
     * Limit how many knowledge_documents to delete.
     */
    limit?: number
  }

  /**
   * knowledge_documents without action
   */
  export type knowledge_documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the knowledge_documents
     */
    select?: knowledge_documentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the knowledge_documents
     */
    omit?: knowledge_documentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: knowledge_documentsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    userType: $Enums.UserType | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    status: $Enums.UserStatus | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    userType: $Enums.UserType | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    status: $Enums.UserStatus | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    userType: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    status: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    status?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    status?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    status?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password: string | null
    userType: $Enums.UserType
    createdAt: Date
    updatedAt: Date
    lastLogin: Date | null
    status: $Enums.UserStatus
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    status?: boolean
    Account?: boolean | users$AccountArgs<ExtArgs>
    Session?: boolean | users$SessionArgs<ExtArgs>
    admins?: boolean | users$adminsArgs<ExtArgs>
    beneficiaries?: boolean | users$beneficiariesArgs<ExtArgs>
    volunteers?: boolean | users$volunteersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    status?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    status?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    status?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "userType" | "createdAt" | "updatedAt" | "lastLogin" | "status", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | users$AccountArgs<ExtArgs>
    Session?: boolean | users$SessionArgs<ExtArgs>
    admins?: boolean | users$adminsArgs<ExtArgs>
    beneficiaries?: boolean | users$beneficiariesArgs<ExtArgs>
    volunteers?: boolean | users$volunteersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>[]
      Session: Prisma.$SessionPayload<ExtArgs>[]
      admins: Prisma.$adminsPayload<ExtArgs> | null
      beneficiaries: Prisma.$beneficiariesPayload<ExtArgs> | null
      volunteers: Prisma.$volunteersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      userType: $Enums.UserType
      createdAt: Date
      updatedAt: Date
      lastLogin: Date | null
      status: $Enums.UserStatus
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account<T extends users$AccountArgs<ExtArgs> = {}>(args?: Subset<T, users$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Session<T extends users$SessionArgs<ExtArgs> = {}>(args?: Subset<T, users$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends users$adminsArgs<ExtArgs> = {}>(args?: Subset<T, users$adminsArgs<ExtArgs>>): Prisma__adminsClient<$Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    beneficiaries<T extends users$beneficiariesArgs<ExtArgs> = {}>(args?: Subset<T, users$beneficiariesArgs<ExtArgs>>): Prisma__beneficiariesClient<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    volunteers<T extends users$volunteersArgs<ExtArgs> = {}>(args?: Subset<T, users$volunteersArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly userType: FieldRef<"users", 'UserType'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
    readonly lastLogin: FieldRef<"users", 'DateTime'>
    readonly status: FieldRef<"users", 'UserStatus'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.Account
   */
  export type users$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * users.Session
   */
  export type users$SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * users.admins
   */
  export type users$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admins
     */
    select?: adminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admins
     */
    omit?: adminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminsInclude<ExtArgs> | null
    where?: adminsWhereInput
  }

  /**
   * users.beneficiaries
   */
  export type users$beneficiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    where?: beneficiariesWhereInput
  }

  /**
   * users.volunteers
   */
  export type users$volunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    where?: volunteersWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model volunteers
   */

  export type AggregateVolunteers = {
    _count: VolunteersCountAggregateOutputType | null
    _avg: VolunteersAvgAggregateOutputType | null
    _sum: VolunteersSumAggregateOutputType | null
    _min: VolunteersMinAggregateOutputType | null
    _max: VolunteersMaxAggregateOutputType | null
  }

  export type VolunteersAvgAggregateOutputType = {
    experience: number | null
  }

  export type VolunteersSumAggregateOutputType = {
    experience: number | null
  }

  export type VolunteersMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    phone: string | null
    experience: number | null
    verified: boolean | null
    userId: string | null
  }

  export type VolunteersMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    birthDate: Date | null
    phone: string | null
    experience: number | null
    verified: boolean | null
    userId: string | null
  }

  export type VolunteersCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    birthDate: number
    phone: number
    experience: number
    skills: number
    specializations: number
    availability: number
    trainings: number
    verified: number
    userId: number
    _all: number
  }


  export type VolunteersAvgAggregateInputType = {
    experience?: true
  }

  export type VolunteersSumAggregateInputType = {
    experience?: true
  }

  export type VolunteersMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    phone?: true
    experience?: true
    verified?: true
    userId?: true
  }

  export type VolunteersMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    phone?: true
    experience?: true
    verified?: true
    userId?: true
  }

  export type VolunteersCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    phone?: true
    experience?: true
    skills?: true
    specializations?: true
    availability?: true
    trainings?: true
    verified?: true
    userId?: true
    _all?: true
  }

  export type VolunteersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which volunteers to aggregate.
     */
    where?: volunteersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volunteers to fetch.
     */
    orderBy?: volunteersOrderByWithRelationInput | volunteersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: volunteersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned volunteers
    **/
    _count?: true | VolunteersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteersMaxAggregateInputType
  }

  export type GetVolunteersAggregateType<T extends VolunteersAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteers[P]>
      : GetScalarType<T[P], AggregateVolunteers[P]>
  }




  export type volunteersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: volunteersWhereInput
    orderBy?: volunteersOrderByWithAggregationInput | volunteersOrderByWithAggregationInput[]
    by: VolunteersScalarFieldEnum[] | VolunteersScalarFieldEnum
    having?: volunteersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteersCountAggregateInputType | true
    _avg?: VolunteersAvgAggregateInputType
    _sum?: VolunteersSumAggregateInputType
    _min?: VolunteersMinAggregateInputType
    _max?: VolunteersMaxAggregateInputType
  }

  export type VolunteersGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    birthDate: Date | null
    phone: string | null
    experience: number
    skills: JsonValue | null
    specializations: JsonValue | null
    availability: JsonValue | null
    trainings: JsonValue | null
    verified: boolean
    userId: string
    _count: VolunteersCountAggregateOutputType | null
    _avg: VolunteersAvgAggregateOutputType | null
    _sum: VolunteersSumAggregateOutputType | null
    _min: VolunteersMinAggregateOutputType | null
    _max: VolunteersMaxAggregateOutputType | null
  }

  type GetVolunteersGroupByPayload<T extends volunteersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteersGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteersGroupByOutputType[P]>
        }
      >
    >


  export type volunteersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    phone?: boolean
    experience?: boolean
    skills?: boolean
    specializations?: boolean
    availability?: boolean
    trainings?: boolean
    verified?: boolean
    userId?: boolean
    beneficiaries?: boolean | volunteers$beneficiariesArgs<ExtArgs>
    diagnostics?: boolean | volunteers$diagnosticsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | VolunteersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteers"]>

  export type volunteersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    phone?: boolean
    experience?: boolean
    skills?: boolean
    specializations?: boolean
    availability?: boolean
    trainings?: boolean
    verified?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteers"]>

  export type volunteersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    phone?: boolean
    experience?: boolean
    skills?: boolean
    specializations?: boolean
    availability?: boolean
    trainings?: boolean
    verified?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteers"]>

  export type volunteersSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    phone?: boolean
    experience?: boolean
    skills?: boolean
    specializations?: boolean
    availability?: boolean
    trainings?: boolean
    verified?: boolean
    userId?: boolean
  }

  export type volunteersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "birthDate" | "phone" | "experience" | "skills" | "specializations" | "availability" | "trainings" | "verified" | "userId", ExtArgs["result"]["volunteers"]>
  export type volunteersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaries?: boolean | volunteers$beneficiariesArgs<ExtArgs>
    diagnostics?: boolean | volunteers$diagnosticsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | VolunteersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type volunteersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type volunteersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $volunteersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "volunteers"
    objects: {
      beneficiaries: Prisma.$beneficiariesPayload<ExtArgs>[]
      diagnostics: Prisma.$diagnosticsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      birthDate: Date | null
      phone: string | null
      experience: number
      skills: Prisma.JsonValue | null
      specializations: Prisma.JsonValue | null
      availability: Prisma.JsonValue | null
      trainings: Prisma.JsonValue | null
      verified: boolean
      userId: string
    }, ExtArgs["result"]["volunteers"]>
    composites: {}
  }

  type volunteersGetPayload<S extends boolean | null | undefined | volunteersDefaultArgs> = $Result.GetResult<Prisma.$volunteersPayload, S>

  type volunteersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<volunteersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteersCountAggregateInputType | true
    }

  export interface volunteersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['volunteers'], meta: { name: 'volunteers' } }
    /**
     * Find zero or one Volunteers that matches the filter.
     * @param {volunteersFindUniqueArgs} args - Arguments to find a Volunteers
     * @example
     * // Get one Volunteers
     * const volunteers = await prisma.volunteers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends volunteersFindUniqueArgs>(args: SelectSubset<T, volunteersFindUniqueArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volunteers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {volunteersFindUniqueOrThrowArgs} args - Arguments to find a Volunteers
     * @example
     * // Get one Volunteers
     * const volunteers = await prisma.volunteers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends volunteersFindUniqueOrThrowArgs>(args: SelectSubset<T, volunteersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volunteersFindFirstArgs} args - Arguments to find a Volunteers
     * @example
     * // Get one Volunteers
     * const volunteers = await prisma.volunteers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends volunteersFindFirstArgs>(args?: SelectSubset<T, volunteersFindFirstArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volunteersFindFirstOrThrowArgs} args - Arguments to find a Volunteers
     * @example
     * // Get one Volunteers
     * const volunteers = await prisma.volunteers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends volunteersFindFirstOrThrowArgs>(args?: SelectSubset<T, volunteersFindFirstOrThrowArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volunteersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volunteers
     * const volunteers = await prisma.volunteers.findMany()
     * 
     * // Get first 10 Volunteers
     * const volunteers = await prisma.volunteers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteersWithIdOnly = await prisma.volunteers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends volunteersFindManyArgs>(args?: SelectSubset<T, volunteersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volunteers.
     * @param {volunteersCreateArgs} args - Arguments to create a Volunteers.
     * @example
     * // Create one Volunteers
     * const Volunteers = await prisma.volunteers.create({
     *   data: {
     *     // ... data to create a Volunteers
     *   }
     * })
     * 
     */
    create<T extends volunteersCreateArgs>(args: SelectSubset<T, volunteersCreateArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volunteers.
     * @param {volunteersCreateManyArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteers = await prisma.volunteers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends volunteersCreateManyArgs>(args?: SelectSubset<T, volunteersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volunteers and returns the data saved in the database.
     * @param {volunteersCreateManyAndReturnArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteers = await prisma.volunteers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volunteers and only return the `id`
     * const volunteersWithIdOnly = await prisma.volunteers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends volunteersCreateManyAndReturnArgs>(args?: SelectSubset<T, volunteersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volunteers.
     * @param {volunteersDeleteArgs} args - Arguments to delete one Volunteers.
     * @example
     * // Delete one Volunteers
     * const Volunteers = await prisma.volunteers.delete({
     *   where: {
     *     // ... filter to delete one Volunteers
     *   }
     * })
     * 
     */
    delete<T extends volunteersDeleteArgs>(args: SelectSubset<T, volunteersDeleteArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volunteers.
     * @param {volunteersUpdateArgs} args - Arguments to update one Volunteers.
     * @example
     * // Update one Volunteers
     * const volunteers = await prisma.volunteers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends volunteersUpdateArgs>(args: SelectSubset<T, volunteersUpdateArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volunteers.
     * @param {volunteersDeleteManyArgs} args - Arguments to filter Volunteers to delete.
     * @example
     * // Delete a few Volunteers
     * const { count } = await prisma.volunteers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends volunteersDeleteManyArgs>(args?: SelectSubset<T, volunteersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volunteersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volunteers
     * const volunteers = await prisma.volunteers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends volunteersUpdateManyArgs>(args: SelectSubset<T, volunteersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers and returns the data updated in the database.
     * @param {volunteersUpdateManyAndReturnArgs} args - Arguments to update many Volunteers.
     * @example
     * // Update many Volunteers
     * const volunteers = await prisma.volunteers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volunteers and only return the `id`
     * const volunteersWithIdOnly = await prisma.volunteers.updateManyAndReturn({
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
    updateManyAndReturn<T extends volunteersUpdateManyAndReturnArgs>(args: SelectSubset<T, volunteersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volunteers.
     * @param {volunteersUpsertArgs} args - Arguments to update or create a Volunteers.
     * @example
     * // Update or create a Volunteers
     * const volunteers = await prisma.volunteers.upsert({
     *   create: {
     *     // ... data to create a Volunteers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volunteers we want to update
     *   }
     * })
     */
    upsert<T extends volunteersUpsertArgs>(args: SelectSubset<T, volunteersUpsertArgs<ExtArgs>>): Prisma__volunteersClient<$Result.GetResult<Prisma.$volunteersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volunteersCountArgs} args - Arguments to filter Volunteers to count.
     * @example
     * // Count the number of Volunteers
     * const count = await prisma.volunteers.count({
     *   where: {
     *     // ... the filter for the Volunteers we want to count
     *   }
     * })
    **/
    count<T extends volunteersCountArgs>(
      args?: Subset<T, volunteersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolunteersAggregateArgs>(args: Subset<T, VolunteersAggregateArgs>): Prisma.PrismaPromise<GetVolunteersAggregateType<T>>

    /**
     * Group by Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volunteersGroupByArgs} args - Group by arguments.
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
      T extends volunteersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: volunteersGroupByArgs['orderBy'] }
        : { orderBy?: volunteersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, volunteersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the volunteers model
   */
  readonly fields: volunteersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for volunteers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__volunteersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    beneficiaries<T extends volunteers$beneficiariesArgs<ExtArgs> = {}>(args?: Subset<T, volunteers$beneficiariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diagnostics<T extends volunteers$diagnosticsArgs<ExtArgs> = {}>(args?: Subset<T, volunteers$diagnosticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the volunteers model
   */
  interface volunteersFieldRefs {
    readonly id: FieldRef<"volunteers", 'String'>
    readonly firstName: FieldRef<"volunteers", 'String'>
    readonly lastName: FieldRef<"volunteers", 'String'>
    readonly birthDate: FieldRef<"volunteers", 'DateTime'>
    readonly phone: FieldRef<"volunteers", 'String'>
    readonly experience: FieldRef<"volunteers", 'Int'>
    readonly skills: FieldRef<"volunteers", 'Json'>
    readonly specializations: FieldRef<"volunteers", 'Json'>
    readonly availability: FieldRef<"volunteers", 'Json'>
    readonly trainings: FieldRef<"volunteers", 'Json'>
    readonly verified: FieldRef<"volunteers", 'Boolean'>
    readonly userId: FieldRef<"volunteers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * volunteers findUnique
   */
  export type volunteersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * Filter, which volunteers to fetch.
     */
    where: volunteersWhereUniqueInput
  }

  /**
   * volunteers findUniqueOrThrow
   */
  export type volunteersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * Filter, which volunteers to fetch.
     */
    where: volunteersWhereUniqueInput
  }

  /**
   * volunteers findFirst
   */
  export type volunteersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * Filter, which volunteers to fetch.
     */
    where?: volunteersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volunteers to fetch.
     */
    orderBy?: volunteersOrderByWithRelationInput | volunteersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for volunteers.
     */
    cursor?: volunteersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of volunteers.
     */
    distinct?: VolunteersScalarFieldEnum | VolunteersScalarFieldEnum[]
  }

  /**
   * volunteers findFirstOrThrow
   */
  export type volunteersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * Filter, which volunteers to fetch.
     */
    where?: volunteersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volunteers to fetch.
     */
    orderBy?: volunteersOrderByWithRelationInput | volunteersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for volunteers.
     */
    cursor?: volunteersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of volunteers.
     */
    distinct?: VolunteersScalarFieldEnum | VolunteersScalarFieldEnum[]
  }

  /**
   * volunteers findMany
   */
  export type volunteersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * Filter, which volunteers to fetch.
     */
    where?: volunteersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volunteers to fetch.
     */
    orderBy?: volunteersOrderByWithRelationInput | volunteersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing volunteers.
     */
    cursor?: volunteersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volunteers.
     */
    skip?: number
    distinct?: VolunteersScalarFieldEnum | VolunteersScalarFieldEnum[]
  }

  /**
   * volunteers create
   */
  export type volunteersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * The data needed to create a volunteers.
     */
    data: XOR<volunteersCreateInput, volunteersUncheckedCreateInput>
  }

  /**
   * volunteers createMany
   */
  export type volunteersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many volunteers.
     */
    data: volunteersCreateManyInput | volunteersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * volunteers createManyAndReturn
   */
  export type volunteersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * The data used to create many volunteers.
     */
    data: volunteersCreateManyInput | volunteersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * volunteers update
   */
  export type volunteersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * The data needed to update a volunteers.
     */
    data: XOR<volunteersUpdateInput, volunteersUncheckedUpdateInput>
    /**
     * Choose, which volunteers to update.
     */
    where: volunteersWhereUniqueInput
  }

  /**
   * volunteers updateMany
   */
  export type volunteersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update volunteers.
     */
    data: XOR<volunteersUpdateManyMutationInput, volunteersUncheckedUpdateManyInput>
    /**
     * Filter which volunteers to update
     */
    where?: volunteersWhereInput
    /**
     * Limit how many volunteers to update.
     */
    limit?: number
  }

  /**
   * volunteers updateManyAndReturn
   */
  export type volunteersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * The data used to update volunteers.
     */
    data: XOR<volunteersUpdateManyMutationInput, volunteersUncheckedUpdateManyInput>
    /**
     * Filter which volunteers to update
     */
    where?: volunteersWhereInput
    /**
     * Limit how many volunteers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * volunteers upsert
   */
  export type volunteersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * The filter to search for the volunteers to update in case it exists.
     */
    where: volunteersWhereUniqueInput
    /**
     * In case the volunteers found by the `where` argument doesn't exist, create a new volunteers with this data.
     */
    create: XOR<volunteersCreateInput, volunteersUncheckedCreateInput>
    /**
     * In case the volunteers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<volunteersUpdateInput, volunteersUncheckedUpdateInput>
  }

  /**
   * volunteers delete
   */
  export type volunteersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
    /**
     * Filter which volunteers to delete.
     */
    where: volunteersWhereUniqueInput
  }

  /**
   * volunteers deleteMany
   */
  export type volunteersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which volunteers to delete
     */
    where?: volunteersWhereInput
    /**
     * Limit how many volunteers to delete.
     */
    limit?: number
  }

  /**
   * volunteers.beneficiaries
   */
  export type volunteers$beneficiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiaries
     */
    select?: beneficiariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the beneficiaries
     */
    omit?: beneficiariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiariesInclude<ExtArgs> | null
    where?: beneficiariesWhereInput
    orderBy?: beneficiariesOrderByWithRelationInput | beneficiariesOrderByWithRelationInput[]
    cursor?: beneficiariesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeneficiariesScalarFieldEnum | BeneficiariesScalarFieldEnum[]
  }

  /**
   * volunteers.diagnostics
   */
  export type volunteers$diagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostics
     */
    select?: diagnosticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostics
     */
    omit?: diagnosticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticsInclude<ExtArgs> | null
    where?: diagnosticsWhereInput
    orderBy?: diagnosticsOrderByWithRelationInput | diagnosticsOrderByWithRelationInput[]
    cursor?: diagnosticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticsScalarFieldEnum | DiagnosticsScalarFieldEnum[]
  }

  /**
   * volunteers without action
   */
  export type volunteersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volunteers
     */
    select?: volunteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volunteers
     */
    omit?: volunteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volunteersInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const AdminsScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    userId: 'userId'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const Anonymous_diagnosticsScalarFieldEnum: {
    id: 'id',
    diagnosticDate: 'diagnosticDate',
    formResponses: 'formResponses',
    results: 'results',
    recommendations: 'recommendations',
    nextSteps: 'nextSteps',
    pdfUrl: 'pdfUrl'
  };

  export type Anonymous_diagnosticsScalarFieldEnum = (typeof Anonymous_diagnosticsScalarFieldEnum)[keyof typeof Anonymous_diagnosticsScalarFieldEnum]


  export const BeneficiariesScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    phone: 'phone',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    familySituation: 'familySituation',
    housing: 'housing',
    professionalSituation: 'professionalSituation',
    monthlyIncome: 'monthlyIncome',
    needs: 'needs',
    photoUrl: 'photoUrl',
    userId: 'userId',
    volunteerRefId: 'volunteerRefId'
  };

  export type BeneficiariesScalarFieldEnum = (typeof BeneficiariesScalarFieldEnum)[keyof typeof BeneficiariesScalarFieldEnum]


  export const DiagnosticsScalarFieldEnum: {
    id: 'id',
    diagnosticDate: 'diagnosticDate',
    status: 'status',
    formResponses: 'formResponses',
    results: 'results',
    recommendations: 'recommendations',
    nextSteps: 'nextSteps',
    pdfUrl: 'pdfUrl',
    version: 'version',
    beneficiaryId: 'beneficiaryId',
    volunteerId: 'volunteerId'
  };

  export type DiagnosticsScalarFieldEnum = (typeof DiagnosticsScalarFieldEnum)[keyof typeof DiagnosticsScalarFieldEnum]


  export const Face_embeddingsScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    embedding: 'embedding',
    createdAt: 'createdAt',
    beneficiaryId: 'beneficiaryId'
  };

  export type Face_embeddingsScalarFieldEnum = (typeof Face_embeddingsScalarFieldEnum)[keyof typeof Face_embeddingsScalarFieldEnum]


  export const Knowledge_documentsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    uploadedById: 'uploadedById'
  };

  export type Knowledge_documentsScalarFieldEnum = (typeof Knowledge_documentsScalarFieldEnum)[keyof typeof Knowledge_documentsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    userType: 'userType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin',
    status: 'status'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VolunteersScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    birthDate: 'birthDate',
    phone: 'phone',
    experience: 'experience',
    skills: 'skills',
    specializations: 'specializations',
    availability: 'availability',
    trainings: 'trainings',
    verified: 'verified',
    userId: 'userId'
  };

  export type VolunteersScalarFieldEnum = (typeof VolunteersScalarFieldEnum)[keyof typeof VolunteersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DiagnosticStatus'
   */
  export type EnumDiagnosticStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiagnosticStatus'>
    


  /**
   * Reference to a field of type 'DiagnosticStatus[]'
   */
  export type ListEnumDiagnosticStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiagnosticStatus[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type adminsWhereInput = {
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    id?: StringFilter<"admins"> | string
    firstName?: StringFilter<"admins"> | string
    lastName?: StringFilter<"admins"> | string
    phone?: StringNullableFilter<"admins"> | string | null
    userId?: StringFilter<"admins"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    knowledge_documents?: Knowledge_documentsListRelationFilter
  }

  export type adminsOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    userId?: SortOrder
    users?: usersOrderByWithRelationInput
    knowledge_documents?: knowledge_documentsOrderByRelationAggregateInput
  }

  export type adminsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: adminsWhereInput | adminsWhereInput[]
    OR?: adminsWhereInput[]
    NOT?: adminsWhereInput | adminsWhereInput[]
    firstName?: StringFilter<"admins"> | string
    lastName?: StringFilter<"admins"> | string
    phone?: StringNullableFilter<"admins"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    knowledge_documents?: Knowledge_documentsListRelationFilter
  }, "id" | "userId">

  export type adminsOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: adminsCountOrderByAggregateInput
    _max?: adminsMaxOrderByAggregateInput
    _min?: adminsMinOrderByAggregateInput
  }

  export type adminsScalarWhereWithAggregatesInput = {
    AND?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    OR?: adminsScalarWhereWithAggregatesInput[]
    NOT?: adminsScalarWhereWithAggregatesInput | adminsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"admins"> | string
    firstName?: StringWithAggregatesFilter<"admins"> | string
    lastName?: StringWithAggregatesFilter<"admins"> | string
    phone?: StringNullableWithAggregatesFilter<"admins"> | string | null
    userId?: StringWithAggregatesFilter<"admins"> | string
  }

  export type anonymous_diagnosticsWhereInput = {
    AND?: anonymous_diagnosticsWhereInput | anonymous_diagnosticsWhereInput[]
    OR?: anonymous_diagnosticsWhereInput[]
    NOT?: anonymous_diagnosticsWhereInput | anonymous_diagnosticsWhereInput[]
    id?: StringFilter<"anonymous_diagnostics"> | string
    diagnosticDate?: DateTimeFilter<"anonymous_diagnostics"> | Date | string
    formResponses?: JsonNullableFilter<"anonymous_diagnostics">
    results?: JsonNullableFilter<"anonymous_diagnostics">
    recommendations?: JsonNullableFilter<"anonymous_diagnostics">
    nextSteps?: StringNullableFilter<"anonymous_diagnostics"> | string | null
    pdfUrl?: StringNullableFilter<"anonymous_diagnostics"> | string | null
  }

  export type anonymous_diagnosticsOrderByWithRelationInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    formResponses?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    nextSteps?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
  }

  export type anonymous_diagnosticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: anonymous_diagnosticsWhereInput | anonymous_diagnosticsWhereInput[]
    OR?: anonymous_diagnosticsWhereInput[]
    NOT?: anonymous_diagnosticsWhereInput | anonymous_diagnosticsWhereInput[]
    diagnosticDate?: DateTimeFilter<"anonymous_diagnostics"> | Date | string
    formResponses?: JsonNullableFilter<"anonymous_diagnostics">
    results?: JsonNullableFilter<"anonymous_diagnostics">
    recommendations?: JsonNullableFilter<"anonymous_diagnostics">
    nextSteps?: StringNullableFilter<"anonymous_diagnostics"> | string | null
    pdfUrl?: StringNullableFilter<"anonymous_diagnostics"> | string | null
  }, "id">

  export type anonymous_diagnosticsOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    formResponses?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    nextSteps?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    _count?: anonymous_diagnosticsCountOrderByAggregateInput
    _max?: anonymous_diagnosticsMaxOrderByAggregateInput
    _min?: anonymous_diagnosticsMinOrderByAggregateInput
  }

  export type anonymous_diagnosticsScalarWhereWithAggregatesInput = {
    AND?: anonymous_diagnosticsScalarWhereWithAggregatesInput | anonymous_diagnosticsScalarWhereWithAggregatesInput[]
    OR?: anonymous_diagnosticsScalarWhereWithAggregatesInput[]
    NOT?: anonymous_diagnosticsScalarWhereWithAggregatesInput | anonymous_diagnosticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"anonymous_diagnostics"> | string
    diagnosticDate?: DateTimeWithAggregatesFilter<"anonymous_diagnostics"> | Date | string
    formResponses?: JsonNullableWithAggregatesFilter<"anonymous_diagnostics">
    results?: JsonNullableWithAggregatesFilter<"anonymous_diagnostics">
    recommendations?: JsonNullableWithAggregatesFilter<"anonymous_diagnostics">
    nextSteps?: StringNullableWithAggregatesFilter<"anonymous_diagnostics"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"anonymous_diagnostics"> | string | null
  }

  export type beneficiariesWhereInput = {
    AND?: beneficiariesWhereInput | beneficiariesWhereInput[]
    OR?: beneficiariesWhereInput[]
    NOT?: beneficiariesWhereInput | beneficiariesWhereInput[]
    id?: StringFilter<"beneficiaries"> | string
    firstName?: StringFilter<"beneficiaries"> | string
    lastName?: StringFilter<"beneficiaries"> | string
    birthDate?: DateTimeNullableFilter<"beneficiaries"> | Date | string | null
    phone?: StringNullableFilter<"beneficiaries"> | string | null
    address?: StringNullableFilter<"beneficiaries"> | string | null
    city?: StringNullableFilter<"beneficiaries"> | string | null
    postalCode?: StringNullableFilter<"beneficiaries"> | string | null
    familySituation?: StringNullableFilter<"beneficiaries"> | string | null
    housing?: StringNullableFilter<"beneficiaries"> | string | null
    professionalSituation?: StringNullableFilter<"beneficiaries"> | string | null
    monthlyIncome?: FloatNullableFilter<"beneficiaries"> | number | null
    needs?: JsonNullableFilter<"beneficiaries">
    photoUrl?: StringNullableFilter<"beneficiaries"> | string | null
    userId?: StringFilter<"beneficiaries"> | string
    volunteerRefId?: StringNullableFilter<"beneficiaries"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    volunteers?: XOR<VolunteersNullableScalarRelationFilter, volunteersWhereInput> | null
    diagnostics?: DiagnosticsListRelationFilter
    face_embeddings?: XOR<Face_embeddingsNullableScalarRelationFilter, face_embeddingsWhereInput> | null
  }

  export type beneficiariesOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    familySituation?: SortOrderInput | SortOrder
    housing?: SortOrderInput | SortOrder
    professionalSituation?: SortOrderInput | SortOrder
    monthlyIncome?: SortOrderInput | SortOrder
    needs?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    volunteerRefId?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    volunteers?: volunteersOrderByWithRelationInput
    diagnostics?: diagnosticsOrderByRelationAggregateInput
    face_embeddings?: face_embeddingsOrderByWithRelationInput
  }

  export type beneficiariesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: beneficiariesWhereInput | beneficiariesWhereInput[]
    OR?: beneficiariesWhereInput[]
    NOT?: beneficiariesWhereInput | beneficiariesWhereInput[]
    firstName?: StringFilter<"beneficiaries"> | string
    lastName?: StringFilter<"beneficiaries"> | string
    birthDate?: DateTimeNullableFilter<"beneficiaries"> | Date | string | null
    phone?: StringNullableFilter<"beneficiaries"> | string | null
    address?: StringNullableFilter<"beneficiaries"> | string | null
    city?: StringNullableFilter<"beneficiaries"> | string | null
    postalCode?: StringNullableFilter<"beneficiaries"> | string | null
    familySituation?: StringNullableFilter<"beneficiaries"> | string | null
    housing?: StringNullableFilter<"beneficiaries"> | string | null
    professionalSituation?: StringNullableFilter<"beneficiaries"> | string | null
    monthlyIncome?: FloatNullableFilter<"beneficiaries"> | number | null
    needs?: JsonNullableFilter<"beneficiaries">
    photoUrl?: StringNullableFilter<"beneficiaries"> | string | null
    volunteerRefId?: StringNullableFilter<"beneficiaries"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    volunteers?: XOR<VolunteersNullableScalarRelationFilter, volunteersWhereInput> | null
    diagnostics?: DiagnosticsListRelationFilter
    face_embeddings?: XOR<Face_embeddingsNullableScalarRelationFilter, face_embeddingsWhereInput> | null
  }, "id" | "userId">

  export type beneficiariesOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    familySituation?: SortOrderInput | SortOrder
    housing?: SortOrderInput | SortOrder
    professionalSituation?: SortOrderInput | SortOrder
    monthlyIncome?: SortOrderInput | SortOrder
    needs?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    volunteerRefId?: SortOrderInput | SortOrder
    _count?: beneficiariesCountOrderByAggregateInput
    _avg?: beneficiariesAvgOrderByAggregateInput
    _max?: beneficiariesMaxOrderByAggregateInput
    _min?: beneficiariesMinOrderByAggregateInput
    _sum?: beneficiariesSumOrderByAggregateInput
  }

  export type beneficiariesScalarWhereWithAggregatesInput = {
    AND?: beneficiariesScalarWhereWithAggregatesInput | beneficiariesScalarWhereWithAggregatesInput[]
    OR?: beneficiariesScalarWhereWithAggregatesInput[]
    NOT?: beneficiariesScalarWhereWithAggregatesInput | beneficiariesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"beneficiaries"> | string
    firstName?: StringWithAggregatesFilter<"beneficiaries"> | string
    lastName?: StringWithAggregatesFilter<"beneficiaries"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"beneficiaries"> | Date | string | null
    phone?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
    address?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
    city?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
    familySituation?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
    housing?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
    professionalSituation?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
    monthlyIncome?: FloatNullableWithAggregatesFilter<"beneficiaries"> | number | null
    needs?: JsonNullableWithAggregatesFilter<"beneficiaries">
    photoUrl?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
    userId?: StringWithAggregatesFilter<"beneficiaries"> | string
    volunteerRefId?: StringNullableWithAggregatesFilter<"beneficiaries"> | string | null
  }

  export type diagnosticsWhereInput = {
    AND?: diagnosticsWhereInput | diagnosticsWhereInput[]
    OR?: diagnosticsWhereInput[]
    NOT?: diagnosticsWhereInput | diagnosticsWhereInput[]
    id?: StringFilter<"diagnostics"> | string
    diagnosticDate?: DateTimeFilter<"diagnostics"> | Date | string
    status?: EnumDiagnosticStatusFilter<"diagnostics"> | $Enums.DiagnosticStatus
    formResponses?: JsonNullableFilter<"diagnostics">
    results?: JsonNullableFilter<"diagnostics">
    recommendations?: JsonNullableFilter<"diagnostics">
    nextSteps?: StringNullableFilter<"diagnostics"> | string | null
    pdfUrl?: StringNullableFilter<"diagnostics"> | string | null
    version?: StringNullableFilter<"diagnostics"> | string | null
    beneficiaryId?: StringFilter<"diagnostics"> | string
    volunteerId?: StringNullableFilter<"diagnostics"> | string | null
    beneficiaries?: XOR<BeneficiariesScalarRelationFilter, beneficiariesWhereInput>
    volunteers?: XOR<VolunteersNullableScalarRelationFilter, volunteersWhereInput> | null
  }

  export type diagnosticsOrderByWithRelationInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    status?: SortOrder
    formResponses?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    nextSteps?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    beneficiaryId?: SortOrder
    volunteerId?: SortOrderInput | SortOrder
    beneficiaries?: beneficiariesOrderByWithRelationInput
    volunteers?: volunteersOrderByWithRelationInput
  }

  export type diagnosticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: diagnosticsWhereInput | diagnosticsWhereInput[]
    OR?: diagnosticsWhereInput[]
    NOT?: diagnosticsWhereInput | diagnosticsWhereInput[]
    diagnosticDate?: DateTimeFilter<"diagnostics"> | Date | string
    status?: EnumDiagnosticStatusFilter<"diagnostics"> | $Enums.DiagnosticStatus
    formResponses?: JsonNullableFilter<"diagnostics">
    results?: JsonNullableFilter<"diagnostics">
    recommendations?: JsonNullableFilter<"diagnostics">
    nextSteps?: StringNullableFilter<"diagnostics"> | string | null
    pdfUrl?: StringNullableFilter<"diagnostics"> | string | null
    version?: StringNullableFilter<"diagnostics"> | string | null
    beneficiaryId?: StringFilter<"diagnostics"> | string
    volunteerId?: StringNullableFilter<"diagnostics"> | string | null
    beneficiaries?: XOR<BeneficiariesScalarRelationFilter, beneficiariesWhereInput>
    volunteers?: XOR<VolunteersNullableScalarRelationFilter, volunteersWhereInput> | null
  }, "id">

  export type diagnosticsOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    status?: SortOrder
    formResponses?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    nextSteps?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    beneficiaryId?: SortOrder
    volunteerId?: SortOrderInput | SortOrder
    _count?: diagnosticsCountOrderByAggregateInput
    _max?: diagnosticsMaxOrderByAggregateInput
    _min?: diagnosticsMinOrderByAggregateInput
  }

  export type diagnosticsScalarWhereWithAggregatesInput = {
    AND?: diagnosticsScalarWhereWithAggregatesInput | diagnosticsScalarWhereWithAggregatesInput[]
    OR?: diagnosticsScalarWhereWithAggregatesInput[]
    NOT?: diagnosticsScalarWhereWithAggregatesInput | diagnosticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"diagnostics"> | string
    diagnosticDate?: DateTimeWithAggregatesFilter<"diagnostics"> | Date | string
    status?: EnumDiagnosticStatusWithAggregatesFilter<"diagnostics"> | $Enums.DiagnosticStatus
    formResponses?: JsonNullableWithAggregatesFilter<"diagnostics">
    results?: JsonNullableWithAggregatesFilter<"diagnostics">
    recommendations?: JsonNullableWithAggregatesFilter<"diagnostics">
    nextSteps?: StringNullableWithAggregatesFilter<"diagnostics"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"diagnostics"> | string | null
    version?: StringNullableWithAggregatesFilter<"diagnostics"> | string | null
    beneficiaryId?: StringWithAggregatesFilter<"diagnostics"> | string
    volunteerId?: StringNullableWithAggregatesFilter<"diagnostics"> | string | null
  }

  export type face_embeddingsWhereInput = {
    AND?: face_embeddingsWhereInput | face_embeddingsWhereInput[]
    OR?: face_embeddingsWhereInput[]
    NOT?: face_embeddingsWhereInput | face_embeddingsWhereInput[]
    id?: StringFilter<"face_embeddings"> | string
    imageUrl?: StringFilter<"face_embeddings"> | string
    embedding?: JsonFilter<"face_embeddings">
    createdAt?: DateTimeFilter<"face_embeddings"> | Date | string
    beneficiaryId?: StringFilter<"face_embeddings"> | string
    beneficiaries?: XOR<BeneficiariesScalarRelationFilter, beneficiariesWhereInput>
  }

  export type face_embeddingsOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    embedding?: SortOrder
    createdAt?: SortOrder
    beneficiaryId?: SortOrder
    beneficiaries?: beneficiariesOrderByWithRelationInput
  }

  export type face_embeddingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    beneficiaryId?: string
    AND?: face_embeddingsWhereInput | face_embeddingsWhereInput[]
    OR?: face_embeddingsWhereInput[]
    NOT?: face_embeddingsWhereInput | face_embeddingsWhereInput[]
    imageUrl?: StringFilter<"face_embeddings"> | string
    embedding?: JsonFilter<"face_embeddings">
    createdAt?: DateTimeFilter<"face_embeddings"> | Date | string
    beneficiaries?: XOR<BeneficiariesScalarRelationFilter, beneficiariesWhereInput>
  }, "id" | "beneficiaryId">

  export type face_embeddingsOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    embedding?: SortOrder
    createdAt?: SortOrder
    beneficiaryId?: SortOrder
    _count?: face_embeddingsCountOrderByAggregateInput
    _max?: face_embeddingsMaxOrderByAggregateInput
    _min?: face_embeddingsMinOrderByAggregateInput
  }

  export type face_embeddingsScalarWhereWithAggregatesInput = {
    AND?: face_embeddingsScalarWhereWithAggregatesInput | face_embeddingsScalarWhereWithAggregatesInput[]
    OR?: face_embeddingsScalarWhereWithAggregatesInput[]
    NOT?: face_embeddingsScalarWhereWithAggregatesInput | face_embeddingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"face_embeddings"> | string
    imageUrl?: StringWithAggregatesFilter<"face_embeddings"> | string
    embedding?: JsonWithAggregatesFilter<"face_embeddings">
    createdAt?: DateTimeWithAggregatesFilter<"face_embeddings"> | Date | string
    beneficiaryId?: StringWithAggregatesFilter<"face_embeddings"> | string
  }

  export type knowledge_documentsWhereInput = {
    AND?: knowledge_documentsWhereInput | knowledge_documentsWhereInput[]
    OR?: knowledge_documentsWhereInput[]
    NOT?: knowledge_documentsWhereInput | knowledge_documentsWhereInput[]
    id?: StringFilter<"knowledge_documents"> | string
    title?: StringFilter<"knowledge_documents"> | string
    content?: StringFilter<"knowledge_documents"> | string
    tags?: StringNullableListFilter<"knowledge_documents">
    createdAt?: DateTimeFilter<"knowledge_documents"> | Date | string
    updatedAt?: DateTimeFilter<"knowledge_documents"> | Date | string
    uploadedById?: StringFilter<"knowledge_documents"> | string
    admins?: XOR<AdminsScalarRelationFilter, adminsWhereInput>
  }

  export type knowledge_documentsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedById?: SortOrder
    admins?: adminsOrderByWithRelationInput
  }

  export type knowledge_documentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: knowledge_documentsWhereInput | knowledge_documentsWhereInput[]
    OR?: knowledge_documentsWhereInput[]
    NOT?: knowledge_documentsWhereInput | knowledge_documentsWhereInput[]
    title?: StringFilter<"knowledge_documents"> | string
    content?: StringFilter<"knowledge_documents"> | string
    tags?: StringNullableListFilter<"knowledge_documents">
    createdAt?: DateTimeFilter<"knowledge_documents"> | Date | string
    updatedAt?: DateTimeFilter<"knowledge_documents"> | Date | string
    uploadedById?: StringFilter<"knowledge_documents"> | string
    admins?: XOR<AdminsScalarRelationFilter, adminsWhereInput>
  }, "id">

  export type knowledge_documentsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedById?: SortOrder
    _count?: knowledge_documentsCountOrderByAggregateInput
    _max?: knowledge_documentsMaxOrderByAggregateInput
    _min?: knowledge_documentsMinOrderByAggregateInput
  }

  export type knowledge_documentsScalarWhereWithAggregatesInput = {
    AND?: knowledge_documentsScalarWhereWithAggregatesInput | knowledge_documentsScalarWhereWithAggregatesInput[]
    OR?: knowledge_documentsScalarWhereWithAggregatesInput[]
    NOT?: knowledge_documentsScalarWhereWithAggregatesInput | knowledge_documentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"knowledge_documents"> | string
    title?: StringWithAggregatesFilter<"knowledge_documents"> | string
    content?: StringWithAggregatesFilter<"knowledge_documents"> | string
    tags?: StringNullableListFilter<"knowledge_documents">
    createdAt?: DateTimeWithAggregatesFilter<"knowledge_documents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"knowledge_documents"> | Date | string
    uploadedById?: StringWithAggregatesFilter<"knowledge_documents"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    userType?: EnumUserTypeFilter<"users"> | $Enums.UserType
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    lastLogin?: DateTimeNullableFilter<"users"> | Date | string | null
    status?: EnumUserStatusFilter<"users"> | $Enums.UserStatus
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
    admins?: XOR<AdminsNullableScalarRelationFilter, adminsWhereInput> | null
    beneficiaries?: XOR<BeneficiariesNullableScalarRelationFilter, beneficiariesWhereInput> | null
    volunteers?: XOR<VolunteersNullableScalarRelationFilter, volunteersWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    status?: SortOrder
    Account?: AccountOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
    admins?: adminsOrderByWithRelationInput
    beneficiaries?: beneficiariesOrderByWithRelationInput
    volunteers?: volunteersOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringNullableFilter<"users"> | string | null
    userType?: EnumUserTypeFilter<"users"> | $Enums.UserType
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    lastLogin?: DateTimeNullableFilter<"users"> | Date | string | null
    status?: EnumUserStatusFilter<"users"> | $Enums.UserStatus
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
    admins?: XOR<AdminsNullableScalarRelationFilter, adminsWhereInput> | null
    beneficiaries?: XOR<BeneficiariesNullableScalarRelationFilter, beneficiariesWhereInput> | null
    volunteers?: XOR<VolunteersNullableScalarRelationFilter, volunteersWhereInput> | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"users"> | $Enums.UserType
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    status?: EnumUserStatusWithAggregatesFilter<"users"> | $Enums.UserStatus
  }

  export type volunteersWhereInput = {
    AND?: volunteersWhereInput | volunteersWhereInput[]
    OR?: volunteersWhereInput[]
    NOT?: volunteersWhereInput | volunteersWhereInput[]
    id?: StringFilter<"volunteers"> | string
    firstName?: StringFilter<"volunteers"> | string
    lastName?: StringFilter<"volunteers"> | string
    birthDate?: DateTimeNullableFilter<"volunteers"> | Date | string | null
    phone?: StringNullableFilter<"volunteers"> | string | null
    experience?: IntFilter<"volunteers"> | number
    skills?: JsonNullableFilter<"volunteers">
    specializations?: JsonNullableFilter<"volunteers">
    availability?: JsonNullableFilter<"volunteers">
    trainings?: JsonNullableFilter<"volunteers">
    verified?: BoolFilter<"volunteers"> | boolean
    userId?: StringFilter<"volunteers"> | string
    beneficiaries?: BeneficiariesListRelationFilter
    diagnostics?: DiagnosticsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type volunteersOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    experience?: SortOrder
    skills?: SortOrderInput | SortOrder
    specializations?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    trainings?: SortOrderInput | SortOrder
    verified?: SortOrder
    userId?: SortOrder
    beneficiaries?: beneficiariesOrderByRelationAggregateInput
    diagnostics?: diagnosticsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type volunteersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: volunteersWhereInput | volunteersWhereInput[]
    OR?: volunteersWhereInput[]
    NOT?: volunteersWhereInput | volunteersWhereInput[]
    firstName?: StringFilter<"volunteers"> | string
    lastName?: StringFilter<"volunteers"> | string
    birthDate?: DateTimeNullableFilter<"volunteers"> | Date | string | null
    phone?: StringNullableFilter<"volunteers"> | string | null
    experience?: IntFilter<"volunteers"> | number
    skills?: JsonNullableFilter<"volunteers">
    specializations?: JsonNullableFilter<"volunteers">
    availability?: JsonNullableFilter<"volunteers">
    trainings?: JsonNullableFilter<"volunteers">
    verified?: BoolFilter<"volunteers"> | boolean
    beneficiaries?: BeneficiariesListRelationFilter
    diagnostics?: DiagnosticsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "userId">

  export type volunteersOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    experience?: SortOrder
    skills?: SortOrderInput | SortOrder
    specializations?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    trainings?: SortOrderInput | SortOrder
    verified?: SortOrder
    userId?: SortOrder
    _count?: volunteersCountOrderByAggregateInput
    _avg?: volunteersAvgOrderByAggregateInput
    _max?: volunteersMaxOrderByAggregateInput
    _min?: volunteersMinOrderByAggregateInput
    _sum?: volunteersSumOrderByAggregateInput
  }

  export type volunteersScalarWhereWithAggregatesInput = {
    AND?: volunteersScalarWhereWithAggregatesInput | volunteersScalarWhereWithAggregatesInput[]
    OR?: volunteersScalarWhereWithAggregatesInput[]
    NOT?: volunteersScalarWhereWithAggregatesInput | volunteersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"volunteers"> | string
    firstName?: StringWithAggregatesFilter<"volunteers"> | string
    lastName?: StringWithAggregatesFilter<"volunteers"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"volunteers"> | Date | string | null
    phone?: StringNullableWithAggregatesFilter<"volunteers"> | string | null
    experience?: IntWithAggregatesFilter<"volunteers"> | number
    skills?: JsonNullableWithAggregatesFilter<"volunteers">
    specializations?: JsonNullableWithAggregatesFilter<"volunteers">
    availability?: JsonNullableWithAggregatesFilter<"volunteers">
    trainings?: JsonNullableWithAggregatesFilter<"volunteers">
    verified?: BoolWithAggregatesFilter<"volunteers"> | boolean
    userId?: StringWithAggregatesFilter<"volunteers"> | string
  }

  export type AccountCreateInput = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    users: usersCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id: string
    sessionToken: string
    expires: Date | string
    users: usersCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminsCreateInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    users: usersCreateNestedOneWithoutAdminsInput
    knowledge_documents?: knowledge_documentsCreateNestedManyWithoutAdminsInput
  }

  export type adminsUncheckedCreateInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    userId: string
    knowledge_documents?: knowledge_documentsUncheckedCreateNestedManyWithoutAdminsInput
  }

  export type adminsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutAdminsNestedInput
    knowledge_documents?: knowledge_documentsUpdateManyWithoutAdminsNestedInput
  }

  export type adminsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    knowledge_documents?: knowledge_documentsUncheckedUpdateManyWithoutAdminsNestedInput
  }

  export type adminsCreateManyInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    userId: string
  }

  export type adminsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type anonymous_diagnosticsCreateInput = {
    id: string
    diagnosticDate?: Date | string
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
  }

  export type anonymous_diagnosticsUncheckedCreateInput = {
    id: string
    diagnosticDate?: Date | string
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
  }

  export type anonymous_diagnosticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type anonymous_diagnosticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type anonymous_diagnosticsCreateManyInput = {
    id: string
    diagnosticDate?: Date | string
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
  }

  export type anonymous_diagnosticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type anonymous_diagnosticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiariesCreateInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    users: usersCreateNestedOneWithoutBeneficiariesInput
    volunteers?: volunteersCreateNestedOneWithoutBeneficiariesInput
    diagnostics?: diagnosticsCreateNestedManyWithoutBeneficiariesInput
    face_embeddings?: face_embeddingsCreateNestedOneWithoutBeneficiariesInput
  }

  export type beneficiariesUncheckedCreateInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    userId: string
    volunteerRefId?: string | null
    diagnostics?: diagnosticsUncheckedCreateNestedManyWithoutBeneficiariesInput
    face_embeddings?: face_embeddingsUncheckedCreateNestedOneWithoutBeneficiariesInput
  }

  export type beneficiariesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutBeneficiariesNestedInput
    volunteers?: volunteersUpdateOneWithoutBeneficiariesNestedInput
    diagnostics?: diagnosticsUpdateManyWithoutBeneficiariesNestedInput
    face_embeddings?: face_embeddingsUpdateOneWithoutBeneficiariesNestedInput
  }

  export type beneficiariesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    volunteerRefId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostics?: diagnosticsUncheckedUpdateManyWithoutBeneficiariesNestedInput
    face_embeddings?: face_embeddingsUncheckedUpdateOneWithoutBeneficiariesNestedInput
  }

  export type beneficiariesCreateManyInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    userId: string
    volunteerRefId?: string | null
  }

  export type beneficiariesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiariesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    volunteerRefId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type diagnosticsCreateInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    beneficiaries: beneficiariesCreateNestedOneWithoutDiagnosticsInput
    volunteers?: volunteersCreateNestedOneWithoutDiagnosticsInput
  }

  export type diagnosticsUncheckedCreateInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    beneficiaryId: string
    volunteerId?: string | null
  }

  export type diagnosticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiaries?: beneficiariesUpdateOneRequiredWithoutDiagnosticsNestedInput
    volunteers?: volunteersUpdateOneWithoutDiagnosticsNestedInput
  }

  export type diagnosticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiaryId?: StringFieldUpdateOperationsInput | string
    volunteerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type diagnosticsCreateManyInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    beneficiaryId: string
    volunteerId?: string | null
  }

  export type diagnosticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type diagnosticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiaryId?: StringFieldUpdateOperationsInput | string
    volunteerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type face_embeddingsCreateInput = {
    id: string
    imageUrl: string
    embedding: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    beneficiaries: beneficiariesCreateNestedOneWithoutFace_embeddingsInput
  }

  export type face_embeddingsUncheckedCreateInput = {
    id: string
    imageUrl: string
    embedding: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    beneficiaryId: string
  }

  export type face_embeddingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiaries?: beneficiariesUpdateOneRequiredWithoutFace_embeddingsNestedInput
  }

  export type face_embeddingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type face_embeddingsCreateManyInput = {
    id: string
    imageUrl: string
    embedding: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    beneficiaryId: string
  }

  export type face_embeddingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type face_embeddingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type knowledge_documentsCreateInput = {
    id?: string
    title: string
    content: string
    tags?: knowledge_documentsCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    admins: adminsCreateNestedOneWithoutKnowledge_documentsInput
  }

  export type knowledge_documentsUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    tags?: knowledge_documentsCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedById: string
  }

  export type knowledge_documentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: knowledge_documentsUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: adminsUpdateOneRequiredWithoutKnowledge_documentsNestedInput
  }

  export type knowledge_documentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: knowledge_documentsUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
  }

  export type knowledge_documentsCreateManyInput = {
    id?: string
    title: string
    content: string
    tags?: knowledge_documentsCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedById: string
  }

  export type knowledge_documentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: knowledge_documentsUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type knowledge_documentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: knowledge_documentsUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountCreateNestedManyWithoutUsersInput
    Session?: SessionCreateNestedManyWithoutUsersInput
    admins?: adminsCreateNestedOneWithoutUsersInput
    beneficiaries?: beneficiariesCreateNestedOneWithoutUsersInput
    volunteers?: volunteersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountUncheckedCreateNestedManyWithoutUsersInput
    Session?: SessionUncheckedCreateNestedManyWithoutUsersInput
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    beneficiaries?: beneficiariesUncheckedCreateNestedOneWithoutUsersInput
    volunteers?: volunteersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUpdateManyWithoutUsersNestedInput
    Session?: SessionUpdateManyWithoutUsersNestedInput
    admins?: adminsUpdateOneWithoutUsersNestedInput
    beneficiaries?: beneficiariesUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUncheckedUpdateManyWithoutUsersNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUsersNestedInput
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    beneficiaries?: beneficiariesUncheckedUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type volunteersCreateInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    beneficiaries?: beneficiariesCreateNestedManyWithoutVolunteersInput
    diagnostics?: diagnosticsCreateNestedManyWithoutVolunteersInput
    users: usersCreateNestedOneWithoutVolunteersInput
  }

  export type volunteersUncheckedCreateInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    userId: string
    beneficiaries?: beneficiariesUncheckedCreateNestedManyWithoutVolunteersInput
    diagnostics?: diagnosticsUncheckedCreateNestedManyWithoutVolunteersInput
  }

  export type volunteersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    beneficiaries?: beneficiariesUpdateManyWithoutVolunteersNestedInput
    diagnostics?: diagnosticsUpdateManyWithoutVolunteersNestedInput
    users?: usersUpdateOneRequiredWithoutVolunteersNestedInput
  }

  export type volunteersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    beneficiaries?: beneficiariesUncheckedUpdateManyWithoutVolunteersNestedInput
    diagnostics?: diagnosticsUncheckedUpdateManyWithoutVolunteersNestedInput
  }

  export type volunteersCreateManyInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    userId: string
  }

  export type volunteersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type volunteersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type Knowledge_documentsListRelationFilter = {
    every?: knowledge_documentsWhereInput
    some?: knowledge_documentsWhereInput
    none?: knowledge_documentsWhereInput
  }

  export type knowledge_documentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminsCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
  }

  export type adminsMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
  }

  export type adminsMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type anonymous_diagnosticsCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    formResponses?: SortOrder
    results?: SortOrder
    recommendations?: SortOrder
    nextSteps?: SortOrder
    pdfUrl?: SortOrder
  }

  export type anonymous_diagnosticsMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    nextSteps?: SortOrder
    pdfUrl?: SortOrder
  }

  export type anonymous_diagnosticsMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    nextSteps?: SortOrder
    pdfUrl?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VolunteersNullableScalarRelationFilter = {
    is?: volunteersWhereInput | null
    isNot?: volunteersWhereInput | null
  }

  export type DiagnosticsListRelationFilter = {
    every?: diagnosticsWhereInput
    some?: diagnosticsWhereInput
    none?: diagnosticsWhereInput
  }

  export type Face_embeddingsNullableScalarRelationFilter = {
    is?: face_embeddingsWhereInput | null
    isNot?: face_embeddingsWhereInput | null
  }

  export type diagnosticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type beneficiariesCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    familySituation?: SortOrder
    housing?: SortOrder
    professionalSituation?: SortOrder
    monthlyIncome?: SortOrder
    needs?: SortOrder
    photoUrl?: SortOrder
    userId?: SortOrder
    volunteerRefId?: SortOrder
  }

  export type beneficiariesAvgOrderByAggregateInput = {
    monthlyIncome?: SortOrder
  }

  export type beneficiariesMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    familySituation?: SortOrder
    housing?: SortOrder
    professionalSituation?: SortOrder
    monthlyIncome?: SortOrder
    photoUrl?: SortOrder
    userId?: SortOrder
    volunteerRefId?: SortOrder
  }

  export type beneficiariesMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    familySituation?: SortOrder
    housing?: SortOrder
    professionalSituation?: SortOrder
    monthlyIncome?: SortOrder
    photoUrl?: SortOrder
    userId?: SortOrder
    volunteerRefId?: SortOrder
  }

  export type beneficiariesSumOrderByAggregateInput = {
    monthlyIncome?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumDiagnosticStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DiagnosticStatus | EnumDiagnosticStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DiagnosticStatus[] | ListEnumDiagnosticStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiagnosticStatus[] | ListEnumDiagnosticStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDiagnosticStatusFilter<$PrismaModel> | $Enums.DiagnosticStatus
  }

  export type BeneficiariesScalarRelationFilter = {
    is?: beneficiariesWhereInput
    isNot?: beneficiariesWhereInput
  }

  export type diagnosticsCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    status?: SortOrder
    formResponses?: SortOrder
    results?: SortOrder
    recommendations?: SortOrder
    nextSteps?: SortOrder
    pdfUrl?: SortOrder
    version?: SortOrder
    beneficiaryId?: SortOrder
    volunteerId?: SortOrder
  }

  export type diagnosticsMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    status?: SortOrder
    nextSteps?: SortOrder
    pdfUrl?: SortOrder
    version?: SortOrder
    beneficiaryId?: SortOrder
    volunteerId?: SortOrder
  }

  export type diagnosticsMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosticDate?: SortOrder
    status?: SortOrder
    nextSteps?: SortOrder
    pdfUrl?: SortOrder
    version?: SortOrder
    beneficiaryId?: SortOrder
    volunteerId?: SortOrder
  }

  export type EnumDiagnosticStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiagnosticStatus | EnumDiagnosticStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DiagnosticStatus[] | ListEnumDiagnosticStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiagnosticStatus[] | ListEnumDiagnosticStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDiagnosticStatusWithAggregatesFilter<$PrismaModel> | $Enums.DiagnosticStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiagnosticStatusFilter<$PrismaModel>
    _max?: NestedEnumDiagnosticStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type face_embeddingsCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    embedding?: SortOrder
    createdAt?: SortOrder
    beneficiaryId?: SortOrder
  }

  export type face_embeddingsMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    beneficiaryId?: SortOrder
  }

  export type face_embeddingsMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    beneficiaryId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AdminsScalarRelationFilter = {
    is?: adminsWhereInput
    isNot?: adminsWhereInput
  }

  export type knowledge_documentsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedById?: SortOrder
  }

  export type knowledge_documentsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedById?: SortOrder
  }

  export type knowledge_documentsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedById?: SortOrder
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AdminsNullableScalarRelationFilter = {
    is?: adminsWhereInput | null
    isNot?: adminsWhereInput | null
  }

  export type BeneficiariesNullableScalarRelationFilter = {
    is?: beneficiariesWhereInput | null
    isNot?: beneficiariesWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    status?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    status?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    status?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BeneficiariesListRelationFilter = {
    every?: beneficiariesWhereInput
    some?: beneficiariesWhereInput
    none?: beneficiariesWhereInput
  }

  export type beneficiariesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type volunteersCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    experience?: SortOrder
    skills?: SortOrder
    specializations?: SortOrder
    availability?: SortOrder
    trainings?: SortOrder
    verified?: SortOrder
    userId?: SortOrder
  }

  export type volunteersAvgOrderByAggregateInput = {
    experience?: SortOrder
  }

  export type volunteersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    experience?: SortOrder
    verified?: SortOrder
    userId?: SortOrder
  }

  export type volunteersMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    experience?: SortOrder
    verified?: SortOrder
    userId?: SortOrder
  }

  export type volunteersSumOrderByAggregateInput = {
    experience?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutAccountInput = {
    create?: XOR<usersCreateWithoutAccountInput, usersUncheckedCreateWithoutAccountInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccountInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<usersCreateWithoutAccountInput, usersUncheckedCreateWithoutAccountInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccountInput
    upsert?: usersUpsertWithoutAccountInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAccountInput, usersUpdateWithoutAccountInput>, usersUncheckedUpdateWithoutAccountInput>
  }

  export type usersCreateNestedOneWithoutSessionInput = {
    create?: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionInput
    upsert?: usersUpsertWithoutSessionInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSessionInput, usersUpdateWithoutSessionInput>, usersUncheckedUpdateWithoutSessionInput>
  }

  export type usersCreateNestedOneWithoutAdminsInput = {
    create?: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAdminsInput
    connect?: usersWhereUniqueInput
  }

  export type knowledge_documentsCreateNestedManyWithoutAdminsInput = {
    create?: XOR<knowledge_documentsCreateWithoutAdminsInput, knowledge_documentsUncheckedCreateWithoutAdminsInput> | knowledge_documentsCreateWithoutAdminsInput[] | knowledge_documentsUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: knowledge_documentsCreateOrConnectWithoutAdminsInput | knowledge_documentsCreateOrConnectWithoutAdminsInput[]
    createMany?: knowledge_documentsCreateManyAdminsInputEnvelope
    connect?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
  }

  export type knowledge_documentsUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: XOR<knowledge_documentsCreateWithoutAdminsInput, knowledge_documentsUncheckedCreateWithoutAdminsInput> | knowledge_documentsCreateWithoutAdminsInput[] | knowledge_documentsUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: knowledge_documentsCreateOrConnectWithoutAdminsInput | knowledge_documentsCreateOrConnectWithoutAdminsInput[]
    createMany?: knowledge_documentsCreateManyAdminsInputEnvelope
    connect?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAdminsInput
    upsert?: usersUpsertWithoutAdminsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAdminsInput, usersUpdateWithoutAdminsInput>, usersUncheckedUpdateWithoutAdminsInput>
  }

  export type knowledge_documentsUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<knowledge_documentsCreateWithoutAdminsInput, knowledge_documentsUncheckedCreateWithoutAdminsInput> | knowledge_documentsCreateWithoutAdminsInput[] | knowledge_documentsUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: knowledge_documentsCreateOrConnectWithoutAdminsInput | knowledge_documentsCreateOrConnectWithoutAdminsInput[]
    upsert?: knowledge_documentsUpsertWithWhereUniqueWithoutAdminsInput | knowledge_documentsUpsertWithWhereUniqueWithoutAdminsInput[]
    createMany?: knowledge_documentsCreateManyAdminsInputEnvelope
    set?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
    disconnect?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
    delete?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
    connect?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
    update?: knowledge_documentsUpdateWithWhereUniqueWithoutAdminsInput | knowledge_documentsUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: knowledge_documentsUpdateManyWithWhereWithoutAdminsInput | knowledge_documentsUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: knowledge_documentsScalarWhereInput | knowledge_documentsScalarWhereInput[]
  }

  export type knowledge_documentsUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<knowledge_documentsCreateWithoutAdminsInput, knowledge_documentsUncheckedCreateWithoutAdminsInput> | knowledge_documentsCreateWithoutAdminsInput[] | knowledge_documentsUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: knowledge_documentsCreateOrConnectWithoutAdminsInput | knowledge_documentsCreateOrConnectWithoutAdminsInput[]
    upsert?: knowledge_documentsUpsertWithWhereUniqueWithoutAdminsInput | knowledge_documentsUpsertWithWhereUniqueWithoutAdminsInput[]
    createMany?: knowledge_documentsCreateManyAdminsInputEnvelope
    set?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
    disconnect?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
    delete?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
    connect?: knowledge_documentsWhereUniqueInput | knowledge_documentsWhereUniqueInput[]
    update?: knowledge_documentsUpdateWithWhereUniqueWithoutAdminsInput | knowledge_documentsUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: knowledge_documentsUpdateManyWithWhereWithoutAdminsInput | knowledge_documentsUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: knowledge_documentsScalarWhereInput | knowledge_documentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutBeneficiariesInput = {
    create?: XOR<usersCreateWithoutBeneficiariesInput, usersUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: usersCreateOrConnectWithoutBeneficiariesInput
    connect?: usersWhereUniqueInput
  }

  export type volunteersCreateNestedOneWithoutBeneficiariesInput = {
    create?: XOR<volunteersCreateWithoutBeneficiariesInput, volunteersUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: volunteersCreateOrConnectWithoutBeneficiariesInput
    connect?: volunteersWhereUniqueInput
  }

  export type diagnosticsCreateNestedManyWithoutBeneficiariesInput = {
    create?: XOR<diagnosticsCreateWithoutBeneficiariesInput, diagnosticsUncheckedCreateWithoutBeneficiariesInput> | diagnosticsCreateWithoutBeneficiariesInput[] | diagnosticsUncheckedCreateWithoutBeneficiariesInput[]
    connectOrCreate?: diagnosticsCreateOrConnectWithoutBeneficiariesInput | diagnosticsCreateOrConnectWithoutBeneficiariesInput[]
    createMany?: diagnosticsCreateManyBeneficiariesInputEnvelope
    connect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
  }

  export type face_embeddingsCreateNestedOneWithoutBeneficiariesInput = {
    create?: XOR<face_embeddingsCreateWithoutBeneficiariesInput, face_embeddingsUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: face_embeddingsCreateOrConnectWithoutBeneficiariesInput
    connect?: face_embeddingsWhereUniqueInput
  }

  export type diagnosticsUncheckedCreateNestedManyWithoutBeneficiariesInput = {
    create?: XOR<diagnosticsCreateWithoutBeneficiariesInput, diagnosticsUncheckedCreateWithoutBeneficiariesInput> | diagnosticsCreateWithoutBeneficiariesInput[] | diagnosticsUncheckedCreateWithoutBeneficiariesInput[]
    connectOrCreate?: diagnosticsCreateOrConnectWithoutBeneficiariesInput | diagnosticsCreateOrConnectWithoutBeneficiariesInput[]
    createMany?: diagnosticsCreateManyBeneficiariesInputEnvelope
    connect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
  }

  export type face_embeddingsUncheckedCreateNestedOneWithoutBeneficiariesInput = {
    create?: XOR<face_embeddingsCreateWithoutBeneficiariesInput, face_embeddingsUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: face_embeddingsCreateOrConnectWithoutBeneficiariesInput
    connect?: face_embeddingsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutBeneficiariesNestedInput = {
    create?: XOR<usersCreateWithoutBeneficiariesInput, usersUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: usersCreateOrConnectWithoutBeneficiariesInput
    upsert?: usersUpsertWithoutBeneficiariesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBeneficiariesInput, usersUpdateWithoutBeneficiariesInput>, usersUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type volunteersUpdateOneWithoutBeneficiariesNestedInput = {
    create?: XOR<volunteersCreateWithoutBeneficiariesInput, volunteersUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: volunteersCreateOrConnectWithoutBeneficiariesInput
    upsert?: volunteersUpsertWithoutBeneficiariesInput
    disconnect?: volunteersWhereInput | boolean
    delete?: volunteersWhereInput | boolean
    connect?: volunteersWhereUniqueInput
    update?: XOR<XOR<volunteersUpdateToOneWithWhereWithoutBeneficiariesInput, volunteersUpdateWithoutBeneficiariesInput>, volunteersUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type diagnosticsUpdateManyWithoutBeneficiariesNestedInput = {
    create?: XOR<diagnosticsCreateWithoutBeneficiariesInput, diagnosticsUncheckedCreateWithoutBeneficiariesInput> | diagnosticsCreateWithoutBeneficiariesInput[] | diagnosticsUncheckedCreateWithoutBeneficiariesInput[]
    connectOrCreate?: diagnosticsCreateOrConnectWithoutBeneficiariesInput | diagnosticsCreateOrConnectWithoutBeneficiariesInput[]
    upsert?: diagnosticsUpsertWithWhereUniqueWithoutBeneficiariesInput | diagnosticsUpsertWithWhereUniqueWithoutBeneficiariesInput[]
    createMany?: diagnosticsCreateManyBeneficiariesInputEnvelope
    set?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    disconnect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    delete?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    connect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    update?: diagnosticsUpdateWithWhereUniqueWithoutBeneficiariesInput | diagnosticsUpdateWithWhereUniqueWithoutBeneficiariesInput[]
    updateMany?: diagnosticsUpdateManyWithWhereWithoutBeneficiariesInput | diagnosticsUpdateManyWithWhereWithoutBeneficiariesInput[]
    deleteMany?: diagnosticsScalarWhereInput | diagnosticsScalarWhereInput[]
  }

  export type face_embeddingsUpdateOneWithoutBeneficiariesNestedInput = {
    create?: XOR<face_embeddingsCreateWithoutBeneficiariesInput, face_embeddingsUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: face_embeddingsCreateOrConnectWithoutBeneficiariesInput
    upsert?: face_embeddingsUpsertWithoutBeneficiariesInput
    disconnect?: face_embeddingsWhereInput | boolean
    delete?: face_embeddingsWhereInput | boolean
    connect?: face_embeddingsWhereUniqueInput
    update?: XOR<XOR<face_embeddingsUpdateToOneWithWhereWithoutBeneficiariesInput, face_embeddingsUpdateWithoutBeneficiariesInput>, face_embeddingsUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type diagnosticsUncheckedUpdateManyWithoutBeneficiariesNestedInput = {
    create?: XOR<diagnosticsCreateWithoutBeneficiariesInput, diagnosticsUncheckedCreateWithoutBeneficiariesInput> | diagnosticsCreateWithoutBeneficiariesInput[] | diagnosticsUncheckedCreateWithoutBeneficiariesInput[]
    connectOrCreate?: diagnosticsCreateOrConnectWithoutBeneficiariesInput | diagnosticsCreateOrConnectWithoutBeneficiariesInput[]
    upsert?: diagnosticsUpsertWithWhereUniqueWithoutBeneficiariesInput | diagnosticsUpsertWithWhereUniqueWithoutBeneficiariesInput[]
    createMany?: diagnosticsCreateManyBeneficiariesInputEnvelope
    set?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    disconnect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    delete?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    connect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    update?: diagnosticsUpdateWithWhereUniqueWithoutBeneficiariesInput | diagnosticsUpdateWithWhereUniqueWithoutBeneficiariesInput[]
    updateMany?: diagnosticsUpdateManyWithWhereWithoutBeneficiariesInput | diagnosticsUpdateManyWithWhereWithoutBeneficiariesInput[]
    deleteMany?: diagnosticsScalarWhereInput | diagnosticsScalarWhereInput[]
  }

  export type face_embeddingsUncheckedUpdateOneWithoutBeneficiariesNestedInput = {
    create?: XOR<face_embeddingsCreateWithoutBeneficiariesInput, face_embeddingsUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: face_embeddingsCreateOrConnectWithoutBeneficiariesInput
    upsert?: face_embeddingsUpsertWithoutBeneficiariesInput
    disconnect?: face_embeddingsWhereInput | boolean
    delete?: face_embeddingsWhereInput | boolean
    connect?: face_embeddingsWhereUniqueInput
    update?: XOR<XOR<face_embeddingsUpdateToOneWithWhereWithoutBeneficiariesInput, face_embeddingsUpdateWithoutBeneficiariesInput>, face_embeddingsUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type beneficiariesCreateNestedOneWithoutDiagnosticsInput = {
    create?: XOR<beneficiariesCreateWithoutDiagnosticsInput, beneficiariesUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: beneficiariesCreateOrConnectWithoutDiagnosticsInput
    connect?: beneficiariesWhereUniqueInput
  }

  export type volunteersCreateNestedOneWithoutDiagnosticsInput = {
    create?: XOR<volunteersCreateWithoutDiagnosticsInput, volunteersUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: volunteersCreateOrConnectWithoutDiagnosticsInput
    connect?: volunteersWhereUniqueInput
  }

  export type EnumDiagnosticStatusFieldUpdateOperationsInput = {
    set?: $Enums.DiagnosticStatus
  }

  export type beneficiariesUpdateOneRequiredWithoutDiagnosticsNestedInput = {
    create?: XOR<beneficiariesCreateWithoutDiagnosticsInput, beneficiariesUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: beneficiariesCreateOrConnectWithoutDiagnosticsInput
    upsert?: beneficiariesUpsertWithoutDiagnosticsInput
    connect?: beneficiariesWhereUniqueInput
    update?: XOR<XOR<beneficiariesUpdateToOneWithWhereWithoutDiagnosticsInput, beneficiariesUpdateWithoutDiagnosticsInput>, beneficiariesUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type volunteersUpdateOneWithoutDiagnosticsNestedInput = {
    create?: XOR<volunteersCreateWithoutDiagnosticsInput, volunteersUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: volunteersCreateOrConnectWithoutDiagnosticsInput
    upsert?: volunteersUpsertWithoutDiagnosticsInput
    disconnect?: volunteersWhereInput | boolean
    delete?: volunteersWhereInput | boolean
    connect?: volunteersWhereUniqueInput
    update?: XOR<XOR<volunteersUpdateToOneWithWhereWithoutDiagnosticsInput, volunteersUpdateWithoutDiagnosticsInput>, volunteersUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type beneficiariesCreateNestedOneWithoutFace_embeddingsInput = {
    create?: XOR<beneficiariesCreateWithoutFace_embeddingsInput, beneficiariesUncheckedCreateWithoutFace_embeddingsInput>
    connectOrCreate?: beneficiariesCreateOrConnectWithoutFace_embeddingsInput
    connect?: beneficiariesWhereUniqueInput
  }

  export type beneficiariesUpdateOneRequiredWithoutFace_embeddingsNestedInput = {
    create?: XOR<beneficiariesCreateWithoutFace_embeddingsInput, beneficiariesUncheckedCreateWithoutFace_embeddingsInput>
    connectOrCreate?: beneficiariesCreateOrConnectWithoutFace_embeddingsInput
    upsert?: beneficiariesUpsertWithoutFace_embeddingsInput
    connect?: beneficiariesWhereUniqueInput
    update?: XOR<XOR<beneficiariesUpdateToOneWithWhereWithoutFace_embeddingsInput, beneficiariesUpdateWithoutFace_embeddingsInput>, beneficiariesUncheckedUpdateWithoutFace_embeddingsInput>
  }

  export type knowledge_documentsCreatetagsInput = {
    set: string[]
  }

  export type adminsCreateNestedOneWithoutKnowledge_documentsInput = {
    create?: XOR<adminsCreateWithoutKnowledge_documentsInput, adminsUncheckedCreateWithoutKnowledge_documentsInput>
    connectOrCreate?: adminsCreateOrConnectWithoutKnowledge_documentsInput
    connect?: adminsWhereUniqueInput
  }

  export type knowledge_documentsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type adminsUpdateOneRequiredWithoutKnowledge_documentsNestedInput = {
    create?: XOR<adminsCreateWithoutKnowledge_documentsInput, adminsUncheckedCreateWithoutKnowledge_documentsInput>
    connectOrCreate?: adminsCreateOrConnectWithoutKnowledge_documentsInput
    upsert?: adminsUpsertWithoutKnowledge_documentsInput
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutKnowledge_documentsInput, adminsUpdateWithoutKnowledge_documentsInput>, adminsUncheckedUpdateWithoutKnowledge_documentsInput>
  }

  export type AccountCreateNestedManyWithoutUsersInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput> | AccountCreateWithoutUsersInput[] | AccountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput | AccountCreateOrConnectWithoutUsersInput[]
    createMany?: AccountCreateManyUsersInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUsersInput = {
    create?: XOR<SessionCreateWithoutUsersInput, SessionUncheckedCreateWithoutUsersInput> | SessionCreateWithoutUsersInput[] | SessionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsersInput | SessionCreateOrConnectWithoutUsersInput[]
    createMany?: SessionCreateManyUsersInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type adminsCreateNestedOneWithoutUsersInput = {
    create?: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUsersInput
    connect?: adminsWhereUniqueInput
  }

  export type beneficiariesCreateNestedOneWithoutUsersInput = {
    create?: XOR<beneficiariesCreateWithoutUsersInput, beneficiariesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiariesCreateOrConnectWithoutUsersInput
    connect?: beneficiariesWhereUniqueInput
  }

  export type volunteersCreateNestedOneWithoutUsersInput = {
    create?: XOR<volunteersCreateWithoutUsersInput, volunteersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: volunteersCreateOrConnectWithoutUsersInput
    connect?: volunteersWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput> | AccountCreateWithoutUsersInput[] | AccountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput | AccountCreateOrConnectWithoutUsersInput[]
    createMany?: AccountCreateManyUsersInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<SessionCreateWithoutUsersInput, SessionUncheckedCreateWithoutUsersInput> | SessionCreateWithoutUsersInput[] | SessionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsersInput | SessionCreateOrConnectWithoutUsersInput[]
    createMany?: SessionCreateManyUsersInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type adminsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUsersInput
    connect?: adminsWhereUniqueInput
  }

  export type beneficiariesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<beneficiariesCreateWithoutUsersInput, beneficiariesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiariesCreateOrConnectWithoutUsersInput
    connect?: beneficiariesWhereUniqueInput
  }

  export type volunteersUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<volunteersCreateWithoutUsersInput, volunteersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: volunteersCreateOrConnectWithoutUsersInput
    connect?: volunteersWhereUniqueInput
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type AccountUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput> | AccountCreateWithoutUsersInput[] | AccountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput | AccountCreateOrConnectWithoutUsersInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUsersInput | AccountUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: AccountCreateManyUsersInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUsersInput | AccountUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUsersInput | AccountUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SessionCreateWithoutUsersInput, SessionUncheckedCreateWithoutUsersInput> | SessionCreateWithoutUsersInput[] | SessionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsersInput | SessionCreateOrConnectWithoutUsersInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUsersInput | SessionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: SessionCreateManyUsersInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUsersInput | SessionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUsersInput | SessionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type adminsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUsersInput
    upsert?: adminsUpsertWithoutUsersInput
    disconnect?: adminsWhereInput | boolean
    delete?: adminsWhereInput | boolean
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutUsersInput, adminsUpdateWithoutUsersInput>, adminsUncheckedUpdateWithoutUsersInput>
  }

  export type beneficiariesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<beneficiariesCreateWithoutUsersInput, beneficiariesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiariesCreateOrConnectWithoutUsersInput
    upsert?: beneficiariesUpsertWithoutUsersInput
    disconnect?: beneficiariesWhereInput | boolean
    delete?: beneficiariesWhereInput | boolean
    connect?: beneficiariesWhereUniqueInput
    update?: XOR<XOR<beneficiariesUpdateToOneWithWhereWithoutUsersInput, beneficiariesUpdateWithoutUsersInput>, beneficiariesUncheckedUpdateWithoutUsersInput>
  }

  export type volunteersUpdateOneWithoutUsersNestedInput = {
    create?: XOR<volunteersCreateWithoutUsersInput, volunteersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: volunteersCreateOrConnectWithoutUsersInput
    upsert?: volunteersUpsertWithoutUsersInput
    disconnect?: volunteersWhereInput | boolean
    delete?: volunteersWhereInput | boolean
    connect?: volunteersWhereUniqueInput
    update?: XOR<XOR<volunteersUpdateToOneWithWhereWithoutUsersInput, volunteersUpdateWithoutUsersInput>, volunteersUncheckedUpdateWithoutUsersInput>
  }

  export type AccountUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput> | AccountCreateWithoutUsersInput[] | AccountUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUsersInput | AccountCreateOrConnectWithoutUsersInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUsersInput | AccountUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: AccountCreateManyUsersInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUsersInput | AccountUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUsersInput | AccountUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SessionCreateWithoutUsersInput, SessionUncheckedCreateWithoutUsersInput> | SessionCreateWithoutUsersInput[] | SessionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUsersInput | SessionCreateOrConnectWithoutUsersInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUsersInput | SessionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: SessionCreateManyUsersInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUsersInput | SessionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUsersInput | SessionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type adminsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: adminsCreateOrConnectWithoutUsersInput
    upsert?: adminsUpsertWithoutUsersInput
    disconnect?: adminsWhereInput | boolean
    delete?: adminsWhereInput | boolean
    connect?: adminsWhereUniqueInput
    update?: XOR<XOR<adminsUpdateToOneWithWhereWithoutUsersInput, adminsUpdateWithoutUsersInput>, adminsUncheckedUpdateWithoutUsersInput>
  }

  export type beneficiariesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<beneficiariesCreateWithoutUsersInput, beneficiariesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiariesCreateOrConnectWithoutUsersInput
    upsert?: beneficiariesUpsertWithoutUsersInput
    disconnect?: beneficiariesWhereInput | boolean
    delete?: beneficiariesWhereInput | boolean
    connect?: beneficiariesWhereUniqueInput
    update?: XOR<XOR<beneficiariesUpdateToOneWithWhereWithoutUsersInput, beneficiariesUpdateWithoutUsersInput>, beneficiariesUncheckedUpdateWithoutUsersInput>
  }

  export type volunteersUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<volunteersCreateWithoutUsersInput, volunteersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: volunteersCreateOrConnectWithoutUsersInput
    upsert?: volunteersUpsertWithoutUsersInput
    disconnect?: volunteersWhereInput | boolean
    delete?: volunteersWhereInput | boolean
    connect?: volunteersWhereUniqueInput
    update?: XOR<XOR<volunteersUpdateToOneWithWhereWithoutUsersInput, volunteersUpdateWithoutUsersInput>, volunteersUncheckedUpdateWithoutUsersInput>
  }

  export type beneficiariesCreateNestedManyWithoutVolunteersInput = {
    create?: XOR<beneficiariesCreateWithoutVolunteersInput, beneficiariesUncheckedCreateWithoutVolunteersInput> | beneficiariesCreateWithoutVolunteersInput[] | beneficiariesUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: beneficiariesCreateOrConnectWithoutVolunteersInput | beneficiariesCreateOrConnectWithoutVolunteersInput[]
    createMany?: beneficiariesCreateManyVolunteersInputEnvelope
    connect?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
  }

  export type diagnosticsCreateNestedManyWithoutVolunteersInput = {
    create?: XOR<diagnosticsCreateWithoutVolunteersInput, diagnosticsUncheckedCreateWithoutVolunteersInput> | diagnosticsCreateWithoutVolunteersInput[] | diagnosticsUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: diagnosticsCreateOrConnectWithoutVolunteersInput | diagnosticsCreateOrConnectWithoutVolunteersInput[]
    createMany?: diagnosticsCreateManyVolunteersInputEnvelope
    connect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutVolunteersInput = {
    create?: XOR<usersCreateWithoutVolunteersInput, usersUncheckedCreateWithoutVolunteersInput>
    connectOrCreate?: usersCreateOrConnectWithoutVolunteersInput
    connect?: usersWhereUniqueInput
  }

  export type beneficiariesUncheckedCreateNestedManyWithoutVolunteersInput = {
    create?: XOR<beneficiariesCreateWithoutVolunteersInput, beneficiariesUncheckedCreateWithoutVolunteersInput> | beneficiariesCreateWithoutVolunteersInput[] | beneficiariesUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: beneficiariesCreateOrConnectWithoutVolunteersInput | beneficiariesCreateOrConnectWithoutVolunteersInput[]
    createMany?: beneficiariesCreateManyVolunteersInputEnvelope
    connect?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
  }

  export type diagnosticsUncheckedCreateNestedManyWithoutVolunteersInput = {
    create?: XOR<diagnosticsCreateWithoutVolunteersInput, diagnosticsUncheckedCreateWithoutVolunteersInput> | diagnosticsCreateWithoutVolunteersInput[] | diagnosticsUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: diagnosticsCreateOrConnectWithoutVolunteersInput | diagnosticsCreateOrConnectWithoutVolunteersInput[]
    createMany?: diagnosticsCreateManyVolunteersInputEnvelope
    connect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type beneficiariesUpdateManyWithoutVolunteersNestedInput = {
    create?: XOR<beneficiariesCreateWithoutVolunteersInput, beneficiariesUncheckedCreateWithoutVolunteersInput> | beneficiariesCreateWithoutVolunteersInput[] | beneficiariesUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: beneficiariesCreateOrConnectWithoutVolunteersInput | beneficiariesCreateOrConnectWithoutVolunteersInput[]
    upsert?: beneficiariesUpsertWithWhereUniqueWithoutVolunteersInput | beneficiariesUpsertWithWhereUniqueWithoutVolunteersInput[]
    createMany?: beneficiariesCreateManyVolunteersInputEnvelope
    set?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
    disconnect?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
    delete?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
    connect?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
    update?: beneficiariesUpdateWithWhereUniqueWithoutVolunteersInput | beneficiariesUpdateWithWhereUniqueWithoutVolunteersInput[]
    updateMany?: beneficiariesUpdateManyWithWhereWithoutVolunteersInput | beneficiariesUpdateManyWithWhereWithoutVolunteersInput[]
    deleteMany?: beneficiariesScalarWhereInput | beneficiariesScalarWhereInput[]
  }

  export type diagnosticsUpdateManyWithoutVolunteersNestedInput = {
    create?: XOR<diagnosticsCreateWithoutVolunteersInput, diagnosticsUncheckedCreateWithoutVolunteersInput> | diagnosticsCreateWithoutVolunteersInput[] | diagnosticsUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: diagnosticsCreateOrConnectWithoutVolunteersInput | diagnosticsCreateOrConnectWithoutVolunteersInput[]
    upsert?: diagnosticsUpsertWithWhereUniqueWithoutVolunteersInput | diagnosticsUpsertWithWhereUniqueWithoutVolunteersInput[]
    createMany?: diagnosticsCreateManyVolunteersInputEnvelope
    set?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    disconnect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    delete?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    connect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    update?: diagnosticsUpdateWithWhereUniqueWithoutVolunteersInput | diagnosticsUpdateWithWhereUniqueWithoutVolunteersInput[]
    updateMany?: diagnosticsUpdateManyWithWhereWithoutVolunteersInput | diagnosticsUpdateManyWithWhereWithoutVolunteersInput[]
    deleteMany?: diagnosticsScalarWhereInput | diagnosticsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutVolunteersNestedInput = {
    create?: XOR<usersCreateWithoutVolunteersInput, usersUncheckedCreateWithoutVolunteersInput>
    connectOrCreate?: usersCreateOrConnectWithoutVolunteersInput
    upsert?: usersUpsertWithoutVolunteersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutVolunteersInput, usersUpdateWithoutVolunteersInput>, usersUncheckedUpdateWithoutVolunteersInput>
  }

  export type beneficiariesUncheckedUpdateManyWithoutVolunteersNestedInput = {
    create?: XOR<beneficiariesCreateWithoutVolunteersInput, beneficiariesUncheckedCreateWithoutVolunteersInput> | beneficiariesCreateWithoutVolunteersInput[] | beneficiariesUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: beneficiariesCreateOrConnectWithoutVolunteersInput | beneficiariesCreateOrConnectWithoutVolunteersInput[]
    upsert?: beneficiariesUpsertWithWhereUniqueWithoutVolunteersInput | beneficiariesUpsertWithWhereUniqueWithoutVolunteersInput[]
    createMany?: beneficiariesCreateManyVolunteersInputEnvelope
    set?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
    disconnect?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
    delete?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
    connect?: beneficiariesWhereUniqueInput | beneficiariesWhereUniqueInput[]
    update?: beneficiariesUpdateWithWhereUniqueWithoutVolunteersInput | beneficiariesUpdateWithWhereUniqueWithoutVolunteersInput[]
    updateMany?: beneficiariesUpdateManyWithWhereWithoutVolunteersInput | beneficiariesUpdateManyWithWhereWithoutVolunteersInput[]
    deleteMany?: beneficiariesScalarWhereInput | beneficiariesScalarWhereInput[]
  }

  export type diagnosticsUncheckedUpdateManyWithoutVolunteersNestedInput = {
    create?: XOR<diagnosticsCreateWithoutVolunteersInput, diagnosticsUncheckedCreateWithoutVolunteersInput> | diagnosticsCreateWithoutVolunteersInput[] | diagnosticsUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: diagnosticsCreateOrConnectWithoutVolunteersInput | diagnosticsCreateOrConnectWithoutVolunteersInput[]
    upsert?: diagnosticsUpsertWithWhereUniqueWithoutVolunteersInput | diagnosticsUpsertWithWhereUniqueWithoutVolunteersInput[]
    createMany?: diagnosticsCreateManyVolunteersInputEnvelope
    set?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    disconnect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    delete?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    connect?: diagnosticsWhereUniqueInput | diagnosticsWhereUniqueInput[]
    update?: diagnosticsUpdateWithWhereUniqueWithoutVolunteersInput | diagnosticsUpdateWithWhereUniqueWithoutVolunteersInput[]
    updateMany?: diagnosticsUpdateManyWithWhereWithoutVolunteersInput | diagnosticsUpdateManyWithWhereWithoutVolunteersInput[]
    deleteMany?: diagnosticsScalarWhereInput | diagnosticsScalarWhereInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumDiagnosticStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DiagnosticStatus | EnumDiagnosticStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DiagnosticStatus[] | ListEnumDiagnosticStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiagnosticStatus[] | ListEnumDiagnosticStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDiagnosticStatusFilter<$PrismaModel> | $Enums.DiagnosticStatus
  }

  export type NestedEnumDiagnosticStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiagnosticStatus | EnumDiagnosticStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DiagnosticStatus[] | ListEnumDiagnosticStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiagnosticStatus[] | ListEnumDiagnosticStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDiagnosticStatusWithAggregatesFilter<$PrismaModel> | $Enums.DiagnosticStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiagnosticStatusFilter<$PrismaModel>
    _max?: NestedEnumDiagnosticStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usersCreateWithoutAccountInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Session?: SessionCreateNestedManyWithoutUsersInput
    admins?: adminsCreateNestedOneWithoutUsersInput
    beneficiaries?: beneficiariesCreateNestedOneWithoutUsersInput
    volunteers?: volunteersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAccountInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Session?: SessionUncheckedCreateNestedManyWithoutUsersInput
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    beneficiaries?: beneficiariesUncheckedCreateNestedOneWithoutUsersInput
    volunteers?: volunteersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAccountInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAccountInput, usersUncheckedCreateWithoutAccountInput>
  }

  export type usersUpsertWithoutAccountInput = {
    update: XOR<usersUpdateWithoutAccountInput, usersUncheckedUpdateWithoutAccountInput>
    create: XOR<usersCreateWithoutAccountInput, usersUncheckedCreateWithoutAccountInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAccountInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAccountInput, usersUncheckedUpdateWithoutAccountInput>
  }

  export type usersUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Session?: SessionUpdateManyWithoutUsersNestedInput
    admins?: adminsUpdateOneWithoutUsersNestedInput
    beneficiaries?: beneficiariesUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Session?: SessionUncheckedUpdateManyWithoutUsersNestedInput
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    beneficiaries?: beneficiariesUncheckedUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutSessionInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountCreateNestedManyWithoutUsersInput
    admins?: adminsCreateNestedOneWithoutUsersInput
    beneficiaries?: beneficiariesCreateNestedOneWithoutUsersInput
    volunteers?: volunteersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSessionInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountUncheckedCreateNestedManyWithoutUsersInput
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    beneficiaries?: beneficiariesUncheckedCreateNestedOneWithoutUsersInput
    volunteers?: volunteersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSessionInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
  }

  export type usersUpsertWithoutSessionInput = {
    update: XOR<usersUpdateWithoutSessionInput, usersUncheckedUpdateWithoutSessionInput>
    create: XOR<usersCreateWithoutSessionInput, usersUncheckedCreateWithoutSessionInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSessionInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSessionInput, usersUncheckedUpdateWithoutSessionInput>
  }

  export type usersUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUpdateManyWithoutUsersNestedInput
    admins?: adminsUpdateOneWithoutUsersNestedInput
    beneficiaries?: beneficiariesUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUncheckedUpdateManyWithoutUsersNestedInput
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    beneficiaries?: beneficiariesUncheckedUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutAdminsInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountCreateNestedManyWithoutUsersInput
    Session?: SessionCreateNestedManyWithoutUsersInput
    beneficiaries?: beneficiariesCreateNestedOneWithoutUsersInput
    volunteers?: volunteersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAdminsInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountUncheckedCreateNestedManyWithoutUsersInput
    Session?: SessionUncheckedCreateNestedManyWithoutUsersInput
    beneficiaries?: beneficiariesUncheckedCreateNestedOneWithoutUsersInput
    volunteers?: volunteersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAdminsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
  }

  export type knowledge_documentsCreateWithoutAdminsInput = {
    id?: string
    title: string
    content: string
    tags?: knowledge_documentsCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type knowledge_documentsUncheckedCreateWithoutAdminsInput = {
    id?: string
    title: string
    content: string
    tags?: knowledge_documentsCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type knowledge_documentsCreateOrConnectWithoutAdminsInput = {
    where: knowledge_documentsWhereUniqueInput
    create: XOR<knowledge_documentsCreateWithoutAdminsInput, knowledge_documentsUncheckedCreateWithoutAdminsInput>
  }

  export type knowledge_documentsCreateManyAdminsInputEnvelope = {
    data: knowledge_documentsCreateManyAdminsInput | knowledge_documentsCreateManyAdminsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutAdminsInput = {
    update: XOR<usersUpdateWithoutAdminsInput, usersUncheckedUpdateWithoutAdminsInput>
    create: XOR<usersCreateWithoutAdminsInput, usersUncheckedCreateWithoutAdminsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAdminsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAdminsInput, usersUncheckedUpdateWithoutAdminsInput>
  }

  export type usersUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUpdateManyWithoutUsersNestedInput
    Session?: SessionUpdateManyWithoutUsersNestedInput
    beneficiaries?: beneficiariesUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUncheckedUpdateManyWithoutUsersNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUsersNestedInput
    beneficiaries?: beneficiariesUncheckedUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type knowledge_documentsUpsertWithWhereUniqueWithoutAdminsInput = {
    where: knowledge_documentsWhereUniqueInput
    update: XOR<knowledge_documentsUpdateWithoutAdminsInput, knowledge_documentsUncheckedUpdateWithoutAdminsInput>
    create: XOR<knowledge_documentsCreateWithoutAdminsInput, knowledge_documentsUncheckedCreateWithoutAdminsInput>
  }

  export type knowledge_documentsUpdateWithWhereUniqueWithoutAdminsInput = {
    where: knowledge_documentsWhereUniqueInput
    data: XOR<knowledge_documentsUpdateWithoutAdminsInput, knowledge_documentsUncheckedUpdateWithoutAdminsInput>
  }

  export type knowledge_documentsUpdateManyWithWhereWithoutAdminsInput = {
    where: knowledge_documentsScalarWhereInput
    data: XOR<knowledge_documentsUpdateManyMutationInput, knowledge_documentsUncheckedUpdateManyWithoutAdminsInput>
  }

  export type knowledge_documentsScalarWhereInput = {
    AND?: knowledge_documentsScalarWhereInput | knowledge_documentsScalarWhereInput[]
    OR?: knowledge_documentsScalarWhereInput[]
    NOT?: knowledge_documentsScalarWhereInput | knowledge_documentsScalarWhereInput[]
    id?: StringFilter<"knowledge_documents"> | string
    title?: StringFilter<"knowledge_documents"> | string
    content?: StringFilter<"knowledge_documents"> | string
    tags?: StringNullableListFilter<"knowledge_documents">
    createdAt?: DateTimeFilter<"knowledge_documents"> | Date | string
    updatedAt?: DateTimeFilter<"knowledge_documents"> | Date | string
    uploadedById?: StringFilter<"knowledge_documents"> | string
  }

  export type usersCreateWithoutBeneficiariesInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountCreateNestedManyWithoutUsersInput
    Session?: SessionCreateNestedManyWithoutUsersInput
    admins?: adminsCreateNestedOneWithoutUsersInput
    volunteers?: volunteersCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBeneficiariesInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountUncheckedCreateNestedManyWithoutUsersInput
    Session?: SessionUncheckedCreateNestedManyWithoutUsersInput
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    volunteers?: volunteersUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBeneficiariesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBeneficiariesInput, usersUncheckedCreateWithoutBeneficiariesInput>
  }

  export type volunteersCreateWithoutBeneficiariesInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    diagnostics?: diagnosticsCreateNestedManyWithoutVolunteersInput
    users: usersCreateNestedOneWithoutVolunteersInput
  }

  export type volunteersUncheckedCreateWithoutBeneficiariesInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    userId: string
    diagnostics?: diagnosticsUncheckedCreateNestedManyWithoutVolunteersInput
  }

  export type volunteersCreateOrConnectWithoutBeneficiariesInput = {
    where: volunteersWhereUniqueInput
    create: XOR<volunteersCreateWithoutBeneficiariesInput, volunteersUncheckedCreateWithoutBeneficiariesInput>
  }

  export type diagnosticsCreateWithoutBeneficiariesInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    volunteers?: volunteersCreateNestedOneWithoutDiagnosticsInput
  }

  export type diagnosticsUncheckedCreateWithoutBeneficiariesInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    volunteerId?: string | null
  }

  export type diagnosticsCreateOrConnectWithoutBeneficiariesInput = {
    where: diagnosticsWhereUniqueInput
    create: XOR<diagnosticsCreateWithoutBeneficiariesInput, diagnosticsUncheckedCreateWithoutBeneficiariesInput>
  }

  export type diagnosticsCreateManyBeneficiariesInputEnvelope = {
    data: diagnosticsCreateManyBeneficiariesInput | diagnosticsCreateManyBeneficiariesInput[]
    skipDuplicates?: boolean
  }

  export type face_embeddingsCreateWithoutBeneficiariesInput = {
    id: string
    imageUrl: string
    embedding: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type face_embeddingsUncheckedCreateWithoutBeneficiariesInput = {
    id: string
    imageUrl: string
    embedding: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type face_embeddingsCreateOrConnectWithoutBeneficiariesInput = {
    where: face_embeddingsWhereUniqueInput
    create: XOR<face_embeddingsCreateWithoutBeneficiariesInput, face_embeddingsUncheckedCreateWithoutBeneficiariesInput>
  }

  export type usersUpsertWithoutBeneficiariesInput = {
    update: XOR<usersUpdateWithoutBeneficiariesInput, usersUncheckedUpdateWithoutBeneficiariesInput>
    create: XOR<usersCreateWithoutBeneficiariesInput, usersUncheckedCreateWithoutBeneficiariesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBeneficiariesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBeneficiariesInput, usersUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type usersUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUpdateManyWithoutUsersNestedInput
    Session?: SessionUpdateManyWithoutUsersNestedInput
    admins?: adminsUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUncheckedUpdateManyWithoutUsersNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUsersNestedInput
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    volunteers?: volunteersUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type volunteersUpsertWithoutBeneficiariesInput = {
    update: XOR<volunteersUpdateWithoutBeneficiariesInput, volunteersUncheckedUpdateWithoutBeneficiariesInput>
    create: XOR<volunteersCreateWithoutBeneficiariesInput, volunteersUncheckedCreateWithoutBeneficiariesInput>
    where?: volunteersWhereInput
  }

  export type volunteersUpdateToOneWithWhereWithoutBeneficiariesInput = {
    where?: volunteersWhereInput
    data: XOR<volunteersUpdateWithoutBeneficiariesInput, volunteersUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type volunteersUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    diagnostics?: diagnosticsUpdateManyWithoutVolunteersNestedInput
    users?: usersUpdateOneRequiredWithoutVolunteersNestedInput
  }

  export type volunteersUncheckedUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    diagnostics?: diagnosticsUncheckedUpdateManyWithoutVolunteersNestedInput
  }

  export type diagnosticsUpsertWithWhereUniqueWithoutBeneficiariesInput = {
    where: diagnosticsWhereUniqueInput
    update: XOR<diagnosticsUpdateWithoutBeneficiariesInput, diagnosticsUncheckedUpdateWithoutBeneficiariesInput>
    create: XOR<diagnosticsCreateWithoutBeneficiariesInput, diagnosticsUncheckedCreateWithoutBeneficiariesInput>
  }

  export type diagnosticsUpdateWithWhereUniqueWithoutBeneficiariesInput = {
    where: diagnosticsWhereUniqueInput
    data: XOR<diagnosticsUpdateWithoutBeneficiariesInput, diagnosticsUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type diagnosticsUpdateManyWithWhereWithoutBeneficiariesInput = {
    where: diagnosticsScalarWhereInput
    data: XOR<diagnosticsUpdateManyMutationInput, diagnosticsUncheckedUpdateManyWithoutBeneficiariesInput>
  }

  export type diagnosticsScalarWhereInput = {
    AND?: diagnosticsScalarWhereInput | diagnosticsScalarWhereInput[]
    OR?: diagnosticsScalarWhereInput[]
    NOT?: diagnosticsScalarWhereInput | diagnosticsScalarWhereInput[]
    id?: StringFilter<"diagnostics"> | string
    diagnosticDate?: DateTimeFilter<"diagnostics"> | Date | string
    status?: EnumDiagnosticStatusFilter<"diagnostics"> | $Enums.DiagnosticStatus
    formResponses?: JsonNullableFilter<"diagnostics">
    results?: JsonNullableFilter<"diagnostics">
    recommendations?: JsonNullableFilter<"diagnostics">
    nextSteps?: StringNullableFilter<"diagnostics"> | string | null
    pdfUrl?: StringNullableFilter<"diagnostics"> | string | null
    version?: StringNullableFilter<"diagnostics"> | string | null
    beneficiaryId?: StringFilter<"diagnostics"> | string
    volunteerId?: StringNullableFilter<"diagnostics"> | string | null
  }

  export type face_embeddingsUpsertWithoutBeneficiariesInput = {
    update: XOR<face_embeddingsUpdateWithoutBeneficiariesInput, face_embeddingsUncheckedUpdateWithoutBeneficiariesInput>
    create: XOR<face_embeddingsCreateWithoutBeneficiariesInput, face_embeddingsUncheckedCreateWithoutBeneficiariesInput>
    where?: face_embeddingsWhereInput
  }

  export type face_embeddingsUpdateToOneWithWhereWithoutBeneficiariesInput = {
    where?: face_embeddingsWhereInput
    data: XOR<face_embeddingsUpdateWithoutBeneficiariesInput, face_embeddingsUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type face_embeddingsUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type face_embeddingsUncheckedUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type beneficiariesCreateWithoutDiagnosticsInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    users: usersCreateNestedOneWithoutBeneficiariesInput
    volunteers?: volunteersCreateNestedOneWithoutBeneficiariesInput
    face_embeddings?: face_embeddingsCreateNestedOneWithoutBeneficiariesInput
  }

  export type beneficiariesUncheckedCreateWithoutDiagnosticsInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    userId: string
    volunteerRefId?: string | null
    face_embeddings?: face_embeddingsUncheckedCreateNestedOneWithoutBeneficiariesInput
  }

  export type beneficiariesCreateOrConnectWithoutDiagnosticsInput = {
    where: beneficiariesWhereUniqueInput
    create: XOR<beneficiariesCreateWithoutDiagnosticsInput, beneficiariesUncheckedCreateWithoutDiagnosticsInput>
  }

  export type volunteersCreateWithoutDiagnosticsInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    beneficiaries?: beneficiariesCreateNestedManyWithoutVolunteersInput
    users: usersCreateNestedOneWithoutVolunteersInput
  }

  export type volunteersUncheckedCreateWithoutDiagnosticsInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    userId: string
    beneficiaries?: beneficiariesUncheckedCreateNestedManyWithoutVolunteersInput
  }

  export type volunteersCreateOrConnectWithoutDiagnosticsInput = {
    where: volunteersWhereUniqueInput
    create: XOR<volunteersCreateWithoutDiagnosticsInput, volunteersUncheckedCreateWithoutDiagnosticsInput>
  }

  export type beneficiariesUpsertWithoutDiagnosticsInput = {
    update: XOR<beneficiariesUpdateWithoutDiagnosticsInput, beneficiariesUncheckedUpdateWithoutDiagnosticsInput>
    create: XOR<beneficiariesCreateWithoutDiagnosticsInput, beneficiariesUncheckedCreateWithoutDiagnosticsInput>
    where?: beneficiariesWhereInput
  }

  export type beneficiariesUpdateToOneWithWhereWithoutDiagnosticsInput = {
    where?: beneficiariesWhereInput
    data: XOR<beneficiariesUpdateWithoutDiagnosticsInput, beneficiariesUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type beneficiariesUpdateWithoutDiagnosticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutBeneficiariesNestedInput
    volunteers?: volunteersUpdateOneWithoutBeneficiariesNestedInput
    face_embeddings?: face_embeddingsUpdateOneWithoutBeneficiariesNestedInput
  }

  export type beneficiariesUncheckedUpdateWithoutDiagnosticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    volunteerRefId?: NullableStringFieldUpdateOperationsInput | string | null
    face_embeddings?: face_embeddingsUncheckedUpdateOneWithoutBeneficiariesNestedInput
  }

  export type volunteersUpsertWithoutDiagnosticsInput = {
    update: XOR<volunteersUpdateWithoutDiagnosticsInput, volunteersUncheckedUpdateWithoutDiagnosticsInput>
    create: XOR<volunteersCreateWithoutDiagnosticsInput, volunteersUncheckedCreateWithoutDiagnosticsInput>
    where?: volunteersWhereInput
  }

  export type volunteersUpdateToOneWithWhereWithoutDiagnosticsInput = {
    where?: volunteersWhereInput
    data: XOR<volunteersUpdateWithoutDiagnosticsInput, volunteersUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type volunteersUpdateWithoutDiagnosticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    beneficiaries?: beneficiariesUpdateManyWithoutVolunteersNestedInput
    users?: usersUpdateOneRequiredWithoutVolunteersNestedInput
  }

  export type volunteersUncheckedUpdateWithoutDiagnosticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    beneficiaries?: beneficiariesUncheckedUpdateManyWithoutVolunteersNestedInput
  }

  export type beneficiariesCreateWithoutFace_embeddingsInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    users: usersCreateNestedOneWithoutBeneficiariesInput
    volunteers?: volunteersCreateNestedOneWithoutBeneficiariesInput
    diagnostics?: diagnosticsCreateNestedManyWithoutBeneficiariesInput
  }

  export type beneficiariesUncheckedCreateWithoutFace_embeddingsInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    userId: string
    volunteerRefId?: string | null
    diagnostics?: diagnosticsUncheckedCreateNestedManyWithoutBeneficiariesInput
  }

  export type beneficiariesCreateOrConnectWithoutFace_embeddingsInput = {
    where: beneficiariesWhereUniqueInput
    create: XOR<beneficiariesCreateWithoutFace_embeddingsInput, beneficiariesUncheckedCreateWithoutFace_embeddingsInput>
  }

  export type beneficiariesUpsertWithoutFace_embeddingsInput = {
    update: XOR<beneficiariesUpdateWithoutFace_embeddingsInput, beneficiariesUncheckedUpdateWithoutFace_embeddingsInput>
    create: XOR<beneficiariesCreateWithoutFace_embeddingsInput, beneficiariesUncheckedCreateWithoutFace_embeddingsInput>
    where?: beneficiariesWhereInput
  }

  export type beneficiariesUpdateToOneWithWhereWithoutFace_embeddingsInput = {
    where?: beneficiariesWhereInput
    data: XOR<beneficiariesUpdateWithoutFace_embeddingsInput, beneficiariesUncheckedUpdateWithoutFace_embeddingsInput>
  }

  export type beneficiariesUpdateWithoutFace_embeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutBeneficiariesNestedInput
    volunteers?: volunteersUpdateOneWithoutBeneficiariesNestedInput
    diagnostics?: diagnosticsUpdateManyWithoutBeneficiariesNestedInput
  }

  export type beneficiariesUncheckedUpdateWithoutFace_embeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    volunteerRefId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostics?: diagnosticsUncheckedUpdateManyWithoutBeneficiariesNestedInput
  }

  export type adminsCreateWithoutKnowledge_documentsInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    users: usersCreateNestedOneWithoutAdminsInput
  }

  export type adminsUncheckedCreateWithoutKnowledge_documentsInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    userId: string
  }

  export type adminsCreateOrConnectWithoutKnowledge_documentsInput = {
    where: adminsWhereUniqueInput
    create: XOR<adminsCreateWithoutKnowledge_documentsInput, adminsUncheckedCreateWithoutKnowledge_documentsInput>
  }

  export type adminsUpsertWithoutKnowledge_documentsInput = {
    update: XOR<adminsUpdateWithoutKnowledge_documentsInput, adminsUncheckedUpdateWithoutKnowledge_documentsInput>
    create: XOR<adminsCreateWithoutKnowledge_documentsInput, adminsUncheckedCreateWithoutKnowledge_documentsInput>
    where?: adminsWhereInput
  }

  export type adminsUpdateToOneWithWhereWithoutKnowledge_documentsInput = {
    where?: adminsWhereInput
    data: XOR<adminsUpdateWithoutKnowledge_documentsInput, adminsUncheckedUpdateWithoutKnowledge_documentsInput>
  }

  export type adminsUpdateWithoutKnowledge_documentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type adminsUncheckedUpdateWithoutKnowledge_documentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateWithoutUsersInput = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUsersInput = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUsersInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
  }

  export type AccountCreateManyUsersInputEnvelope = {
    data: AccountCreateManyUsersInput | AccountCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUsersInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUsersInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUsersInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUsersInput, SessionUncheckedCreateWithoutUsersInput>
  }

  export type SessionCreateManyUsersInputEnvelope = {
    data: SessionCreateManyUsersInput | SessionCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type adminsCreateWithoutUsersInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    knowledge_documents?: knowledge_documentsCreateNestedManyWithoutAdminsInput
  }

  export type adminsUncheckedCreateWithoutUsersInput = {
    id: string
    firstName: string
    lastName: string
    phone?: string | null
    knowledge_documents?: knowledge_documentsUncheckedCreateNestedManyWithoutAdminsInput
  }

  export type adminsCreateOrConnectWithoutUsersInput = {
    where: adminsWhereUniqueInput
    create: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
  }

  export type beneficiariesCreateWithoutUsersInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    volunteers?: volunteersCreateNestedOneWithoutBeneficiariesInput
    diagnostics?: diagnosticsCreateNestedManyWithoutBeneficiariesInput
    face_embeddings?: face_embeddingsCreateNestedOneWithoutBeneficiariesInput
  }

  export type beneficiariesUncheckedCreateWithoutUsersInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    volunteerRefId?: string | null
    diagnostics?: diagnosticsUncheckedCreateNestedManyWithoutBeneficiariesInput
    face_embeddings?: face_embeddingsUncheckedCreateNestedOneWithoutBeneficiariesInput
  }

  export type beneficiariesCreateOrConnectWithoutUsersInput = {
    where: beneficiariesWhereUniqueInput
    create: XOR<beneficiariesCreateWithoutUsersInput, beneficiariesUncheckedCreateWithoutUsersInput>
  }

  export type volunteersCreateWithoutUsersInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    beneficiaries?: beneficiariesCreateNestedManyWithoutVolunteersInput
    diagnostics?: diagnosticsCreateNestedManyWithoutVolunteersInput
  }

  export type volunteersUncheckedCreateWithoutUsersInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    experience?: number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: boolean
    beneficiaries?: beneficiariesUncheckedCreateNestedManyWithoutVolunteersInput
    diagnostics?: diagnosticsUncheckedCreateNestedManyWithoutVolunteersInput
  }

  export type volunteersCreateOrConnectWithoutUsersInput = {
    where: volunteersWhereUniqueInput
    create: XOR<volunteersCreateWithoutUsersInput, volunteersUncheckedCreateWithoutUsersInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUsersInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUsersInput, AccountUncheckedUpdateWithoutUsersInput>
    create: XOR<AccountCreateWithoutUsersInput, AccountUncheckedCreateWithoutUsersInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUsersInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUsersInput, AccountUncheckedUpdateWithoutUsersInput>
  }

  export type AccountUpdateManyWithWhereWithoutUsersInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUsersInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUsersInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUsersInput, SessionUncheckedUpdateWithoutUsersInput>
    create: XOR<SessionCreateWithoutUsersInput, SessionUncheckedCreateWithoutUsersInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUsersInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUsersInput, SessionUncheckedUpdateWithoutUsersInput>
  }

  export type SessionUpdateManyWithWhereWithoutUsersInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUsersInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type adminsUpsertWithoutUsersInput = {
    update: XOR<adminsUpdateWithoutUsersInput, adminsUncheckedUpdateWithoutUsersInput>
    create: XOR<adminsCreateWithoutUsersInput, adminsUncheckedCreateWithoutUsersInput>
    where?: adminsWhereInput
  }

  export type adminsUpdateToOneWithWhereWithoutUsersInput = {
    where?: adminsWhereInput
    data: XOR<adminsUpdateWithoutUsersInput, adminsUncheckedUpdateWithoutUsersInput>
  }

  export type adminsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    knowledge_documents?: knowledge_documentsUpdateManyWithoutAdminsNestedInput
  }

  export type adminsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    knowledge_documents?: knowledge_documentsUncheckedUpdateManyWithoutAdminsNestedInput
  }

  export type beneficiariesUpsertWithoutUsersInput = {
    update: XOR<beneficiariesUpdateWithoutUsersInput, beneficiariesUncheckedUpdateWithoutUsersInput>
    create: XOR<beneficiariesCreateWithoutUsersInput, beneficiariesUncheckedCreateWithoutUsersInput>
    where?: beneficiariesWhereInput
  }

  export type beneficiariesUpdateToOneWithWhereWithoutUsersInput = {
    where?: beneficiariesWhereInput
    data: XOR<beneficiariesUpdateWithoutUsersInput, beneficiariesUncheckedUpdateWithoutUsersInput>
  }

  export type beneficiariesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    volunteers?: volunteersUpdateOneWithoutBeneficiariesNestedInput
    diagnostics?: diagnosticsUpdateManyWithoutBeneficiariesNestedInput
    face_embeddings?: face_embeddingsUpdateOneWithoutBeneficiariesNestedInput
  }

  export type beneficiariesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerRefId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostics?: diagnosticsUncheckedUpdateManyWithoutBeneficiariesNestedInput
    face_embeddings?: face_embeddingsUncheckedUpdateOneWithoutBeneficiariesNestedInput
  }

  export type volunteersUpsertWithoutUsersInput = {
    update: XOR<volunteersUpdateWithoutUsersInput, volunteersUncheckedUpdateWithoutUsersInput>
    create: XOR<volunteersCreateWithoutUsersInput, volunteersUncheckedCreateWithoutUsersInput>
    where?: volunteersWhereInput
  }

  export type volunteersUpdateToOneWithWhereWithoutUsersInput = {
    where?: volunteersWhereInput
    data: XOR<volunteersUpdateWithoutUsersInput, volunteersUncheckedUpdateWithoutUsersInput>
  }

  export type volunteersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    beneficiaries?: beneficiariesUpdateManyWithoutVolunteersNestedInput
    diagnostics?: diagnosticsUpdateManyWithoutVolunteersNestedInput
  }

  export type volunteersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: IntFieldUpdateOperationsInput | number
    skills?: NullableJsonNullValueInput | InputJsonValue
    specializations?: NullableJsonNullValueInput | InputJsonValue
    availability?: NullableJsonNullValueInput | InputJsonValue
    trainings?: NullableJsonNullValueInput | InputJsonValue
    verified?: BoolFieldUpdateOperationsInput | boolean
    beneficiaries?: beneficiariesUncheckedUpdateManyWithoutVolunteersNestedInput
    diagnostics?: diagnosticsUncheckedUpdateManyWithoutVolunteersNestedInput
  }

  export type beneficiariesCreateWithoutVolunteersInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    users: usersCreateNestedOneWithoutBeneficiariesInput
    diagnostics?: diagnosticsCreateNestedManyWithoutBeneficiariesInput
    face_embeddings?: face_embeddingsCreateNestedOneWithoutBeneficiariesInput
  }

  export type beneficiariesUncheckedCreateWithoutVolunteersInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    userId: string
    diagnostics?: diagnosticsUncheckedCreateNestedManyWithoutBeneficiariesInput
    face_embeddings?: face_embeddingsUncheckedCreateNestedOneWithoutBeneficiariesInput
  }

  export type beneficiariesCreateOrConnectWithoutVolunteersInput = {
    where: beneficiariesWhereUniqueInput
    create: XOR<beneficiariesCreateWithoutVolunteersInput, beneficiariesUncheckedCreateWithoutVolunteersInput>
  }

  export type beneficiariesCreateManyVolunteersInputEnvelope = {
    data: beneficiariesCreateManyVolunteersInput | beneficiariesCreateManyVolunteersInput[]
    skipDuplicates?: boolean
  }

  export type diagnosticsCreateWithoutVolunteersInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    beneficiaries: beneficiariesCreateNestedOneWithoutDiagnosticsInput
  }

  export type diagnosticsUncheckedCreateWithoutVolunteersInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    beneficiaryId: string
  }

  export type diagnosticsCreateOrConnectWithoutVolunteersInput = {
    where: diagnosticsWhereUniqueInput
    create: XOR<diagnosticsCreateWithoutVolunteersInput, diagnosticsUncheckedCreateWithoutVolunteersInput>
  }

  export type diagnosticsCreateManyVolunteersInputEnvelope = {
    data: diagnosticsCreateManyVolunteersInput | diagnosticsCreateManyVolunteersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutVolunteersInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountCreateNestedManyWithoutUsersInput
    Session?: SessionCreateNestedManyWithoutUsersInput
    admins?: adminsCreateNestedOneWithoutUsersInput
    beneficiaries?: beneficiariesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutVolunteersInput = {
    id: string
    email: string
    password?: string | null
    userType: $Enums.UserType
    createdAt?: Date | string
    updatedAt: Date | string
    lastLogin?: Date | string | null
    status?: $Enums.UserStatus
    Account?: AccountUncheckedCreateNestedManyWithoutUsersInput
    Session?: SessionUncheckedCreateNestedManyWithoutUsersInput
    admins?: adminsUncheckedCreateNestedOneWithoutUsersInput
    beneficiaries?: beneficiariesUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutVolunteersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutVolunteersInput, usersUncheckedCreateWithoutVolunteersInput>
  }

  export type beneficiariesUpsertWithWhereUniqueWithoutVolunteersInput = {
    where: beneficiariesWhereUniqueInput
    update: XOR<beneficiariesUpdateWithoutVolunteersInput, beneficiariesUncheckedUpdateWithoutVolunteersInput>
    create: XOR<beneficiariesCreateWithoutVolunteersInput, beneficiariesUncheckedCreateWithoutVolunteersInput>
  }

  export type beneficiariesUpdateWithWhereUniqueWithoutVolunteersInput = {
    where: beneficiariesWhereUniqueInput
    data: XOR<beneficiariesUpdateWithoutVolunteersInput, beneficiariesUncheckedUpdateWithoutVolunteersInput>
  }

  export type beneficiariesUpdateManyWithWhereWithoutVolunteersInput = {
    where: beneficiariesScalarWhereInput
    data: XOR<beneficiariesUpdateManyMutationInput, beneficiariesUncheckedUpdateManyWithoutVolunteersInput>
  }

  export type beneficiariesScalarWhereInput = {
    AND?: beneficiariesScalarWhereInput | beneficiariesScalarWhereInput[]
    OR?: beneficiariesScalarWhereInput[]
    NOT?: beneficiariesScalarWhereInput | beneficiariesScalarWhereInput[]
    id?: StringFilter<"beneficiaries"> | string
    firstName?: StringFilter<"beneficiaries"> | string
    lastName?: StringFilter<"beneficiaries"> | string
    birthDate?: DateTimeNullableFilter<"beneficiaries"> | Date | string | null
    phone?: StringNullableFilter<"beneficiaries"> | string | null
    address?: StringNullableFilter<"beneficiaries"> | string | null
    city?: StringNullableFilter<"beneficiaries"> | string | null
    postalCode?: StringNullableFilter<"beneficiaries"> | string | null
    familySituation?: StringNullableFilter<"beneficiaries"> | string | null
    housing?: StringNullableFilter<"beneficiaries"> | string | null
    professionalSituation?: StringNullableFilter<"beneficiaries"> | string | null
    monthlyIncome?: FloatNullableFilter<"beneficiaries"> | number | null
    needs?: JsonNullableFilter<"beneficiaries">
    photoUrl?: StringNullableFilter<"beneficiaries"> | string | null
    userId?: StringFilter<"beneficiaries"> | string
    volunteerRefId?: StringNullableFilter<"beneficiaries"> | string | null
  }

  export type diagnosticsUpsertWithWhereUniqueWithoutVolunteersInput = {
    where: diagnosticsWhereUniqueInput
    update: XOR<diagnosticsUpdateWithoutVolunteersInput, diagnosticsUncheckedUpdateWithoutVolunteersInput>
    create: XOR<diagnosticsCreateWithoutVolunteersInput, diagnosticsUncheckedCreateWithoutVolunteersInput>
  }

  export type diagnosticsUpdateWithWhereUniqueWithoutVolunteersInput = {
    where: diagnosticsWhereUniqueInput
    data: XOR<diagnosticsUpdateWithoutVolunteersInput, diagnosticsUncheckedUpdateWithoutVolunteersInput>
  }

  export type diagnosticsUpdateManyWithWhereWithoutVolunteersInput = {
    where: diagnosticsScalarWhereInput
    data: XOR<diagnosticsUpdateManyMutationInput, diagnosticsUncheckedUpdateManyWithoutVolunteersInput>
  }

  export type usersUpsertWithoutVolunteersInput = {
    update: XOR<usersUpdateWithoutVolunteersInput, usersUncheckedUpdateWithoutVolunteersInput>
    create: XOR<usersCreateWithoutVolunteersInput, usersUncheckedCreateWithoutVolunteersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutVolunteersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutVolunteersInput, usersUncheckedUpdateWithoutVolunteersInput>
  }

  export type usersUpdateWithoutVolunteersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUpdateManyWithoutUsersNestedInput
    Session?: SessionUpdateManyWithoutUsersNestedInput
    admins?: adminsUpdateOneWithoutUsersNestedInput
    beneficiaries?: beneficiariesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutVolunteersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    Account?: AccountUncheckedUpdateManyWithoutUsersNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUsersNestedInput
    admins?: adminsUncheckedUpdateOneWithoutUsersNestedInput
    beneficiaries?: beneficiariesUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type knowledge_documentsCreateManyAdminsInput = {
    id?: string
    title: string
    content: string
    tags?: knowledge_documentsCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type knowledge_documentsUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: knowledge_documentsUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type knowledge_documentsUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: knowledge_documentsUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type knowledge_documentsUncheckedUpdateManyWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: knowledge_documentsUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosticsCreateManyBeneficiariesInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    volunteerId?: string | null
  }

  export type diagnosticsUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    volunteers?: volunteersUpdateOneWithoutDiagnosticsNestedInput
  }

  export type diagnosticsUncheckedUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type diagnosticsUncheckedUpdateManyWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    volunteerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyUsersInput = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUsersInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type beneficiariesCreateManyVolunteersInput = {
    id: string
    firstName: string
    lastName: string
    birthDate?: Date | string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    familySituation?: string | null
    housing?: string | null
    professionalSituation?: string | null
    monthlyIncome?: number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: string | null
    userId: string
  }

  export type diagnosticsCreateManyVolunteersInput = {
    id?: string
    diagnosticDate?: Date | string
    status?: $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: string | null
    pdfUrl?: string | null
    version?: string | null
    beneficiaryId: string
  }

  export type beneficiariesUpdateWithoutVolunteersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutBeneficiariesNestedInput
    diagnostics?: diagnosticsUpdateManyWithoutBeneficiariesNestedInput
    face_embeddings?: face_embeddingsUpdateOneWithoutBeneficiariesNestedInput
  }

  export type beneficiariesUncheckedUpdateWithoutVolunteersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    diagnostics?: diagnosticsUncheckedUpdateManyWithoutBeneficiariesNestedInput
    face_embeddings?: face_embeddingsUncheckedUpdateOneWithoutBeneficiariesNestedInput
  }

  export type beneficiariesUncheckedUpdateManyWithoutVolunteersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    familySituation?: NullableStringFieldUpdateOperationsInput | string | null
    housing?: NullableStringFieldUpdateOperationsInput | string | null
    professionalSituation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: NullableFloatFieldUpdateOperationsInput | number | null
    needs?: NullableJsonNullValueInput | InputJsonValue
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type diagnosticsUpdateWithoutVolunteersInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiaries?: beneficiariesUpdateOneRequiredWithoutDiagnosticsNestedInput
  }

  export type diagnosticsUncheckedUpdateWithoutVolunteersInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type diagnosticsUncheckedUpdateManyWithoutVolunteersInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosticDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDiagnosticStatusFieldUpdateOperationsInput | $Enums.DiagnosticStatus
    formResponses?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    nextSteps?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    beneficiaryId?: StringFieldUpdateOperationsInput | string
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