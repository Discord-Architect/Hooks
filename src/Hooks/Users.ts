import Manager from '@discord-architect/core/build/Manager'
import { Collection, User } from 'discord.js'

export function useUsers(): { users: Collection<string, User>; count: number } {
	const users: Collection<string, User> = Manager.client.users.cache
	return {
		users,
		count: users.size
	}
}

export function useUser(uuid: string): User | undefined {
	return Manager.client.users.cache.get(uuid)
}
