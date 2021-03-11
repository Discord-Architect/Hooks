import { CommandInterface, EventInterface, Manager, PrerequisiteInterface } from '@discord-architect/core'
import { Client } from 'discord.js'

export function useCommands(): Map<string, CommandInterface> {
	return Manager.commands.get('partial')!
}

export function useCommand(key: string): CommandInterface | undefined {
	return Manager.commands.get('partial')?.get(key)
}

export function useEvents(): Map<string, Array<EventInterface<any>>> {
	return Manager.events
}

export function useEvent(key: string): Array<EventInterface<any>> | undefined {
	return Manager.events.get(key)
}

export function usePrerequisites(): Map<string, PrerequisiteInterface> {
	return Manager.requires
}

export function usePrerequisite(key: string): PrerequisiteInterface | undefined {
	return Manager.requires.get(key)
}

export function useClient(): Client {
	return Manager.client
}
