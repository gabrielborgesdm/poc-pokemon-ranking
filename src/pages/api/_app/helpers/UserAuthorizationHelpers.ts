import { USER_KEYS, USER_ROLES } from '../../../../configs/APIConfig'
import { IPokemonDocument } from '../../../../configs/types/IPokemon'
import { IRequest } from '../../../../configs/types/IRequest'
import { IUser, IUserDocument } from '../../../../configs/types/IUser'
import { populateUserWithPokemons } from '../../../../helpers/PokemonHelpers'

export const isUserAuthorized = (authenticatedUser: IUser, targetUser: IUserDocument): boolean => {
  return authenticatedUser.role === USER_ROLES.ADMIN || authenticatedUser._id.toString() === targetUser._id.toString()
}

const deleteFromUser = (user: IUser, ...fields: Array<string>) => {
  fields.forEach((field: string) => delete user[field])
}
export const formatUserDocument = (req: IRequest, response: IUserDocument, allPokemons: IPokemonDocument[]): IUser => {
  const user = response.toObject()
  deleteFromUser(user, USER_KEYS.PASSWORD, USER_KEYS.__V)
  populateUserWithPokemons(req, user, allPokemons)
  return user
}

export const abstractUserBasedOnAuthorizationLevel = (req: IRequest, authenticatedUser: IUser, response: IUserDocument, allPokemons: IPokemonDocument[]): IUser => {
  const user: IUser = formatUserDocument(req, response, allPokemons)
  const { _ID, ROLE, EMAIL, CREATED_AT, UPDATED_AT } = USER_KEYS
  if (authenticatedUser.role !== USER_ROLES.ADMIN && authenticatedUser._id.toString() !== response._id.toString()) {
    deleteFromUser(user, _ID, ROLE, EMAIL, CREATED_AT, UPDATED_AT)
  }
  return user
}
