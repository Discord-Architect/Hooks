import Manager from '@discord-architect/core/build/Manager'
import { Channel, Collection, Message, TextChannel } from 'discord.js'

export function useMessages(channelId: string): { messages: Collection<string, Message>; count: number } | undefined {
	const channel: Channel | undefined = Manager.client.channels.cache.get(channelId)
	if (channel instanceof TextChannel) {
		const messages = channel.messages.cache
		return {
			messages,
			count: messages.size
		}
	}
	return undefined
}

export function useMessage(channelId: string, messageId: string): Message | undefined {
	const channel: Channel | undefined = Manager.client.channels.cache.get(channelId)
	if (channel instanceof TextChannel) return channel.messages.cache.get(messageId)
	else return undefined
}
