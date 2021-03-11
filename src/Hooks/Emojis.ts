import { Collection, Guild, GuildEmoji } from 'discord.js'

export function useEmojis(guild: Guild): { emojis: Collection<string, GuildEmoji>; count: number } {
	const emojis: Collection<string, GuildEmoji> = guild.emojis.cache
	return {
		emojis,
		count: emojis.size
	}
}

export function useEmoji(guild: Guild, emojiId: string): GuildEmoji | undefined {
	return guild.emojis.cache.get(emojiId)
}
