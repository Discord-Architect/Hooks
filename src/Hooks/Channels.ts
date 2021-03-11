import Manager from '@discord-architect/core/build/Manager'
import { Channel, Collection } from 'discord.js'

export function useChannels(): { channels: Collection<string, Channel>; count: number } {
	const channels: Collection<string, Channel> = Manager.client.channels.cache
	return {
		channels,
		count: channels.size
	}
}

export function useChannel(uuid: string): Channel | undefined {
	return Manager.client.channels.cache.get(uuid)
}
