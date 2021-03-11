import Manager from '@discord-architect/core/build/Manager'
import { Collection, Guild } from 'discord.js'

export function useGuilds(): { guilds: Collection<string, Guild>; count: number } {
	const guilds: Collection<string, Guild> = Manager.client.guilds.cache
	return {
		guilds,
		count: guilds.size
	}
}

export function useGuild(uuid: string): Guild | undefined {
	return Manager.client.guilds.cache.get(uuid)
}
