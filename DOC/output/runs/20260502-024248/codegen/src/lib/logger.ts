type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  level: LogLevel
  message: string
  request_id?: string
  user_id?: string
  route?: string
  latency_ms?: number
  [key: string]: unknown
}

function log(entry: LogEntry): void {
  const line = JSON.stringify({ ts: new Date().toISOString(), ...entry })
  if (entry.level === 'error') {
    console.error(line)
  } else if (entry.level === 'warn') {
    console.warn(line)
  } else {
    console.log(line)
  }
}

export const logger = {
  debug: (entry: Omit<LogEntry, 'level'>) => log({ ...entry, level: 'debug' }),
  info: (entry: Omit<LogEntry, 'level'>) => log({ ...entry, level: 'info' }),
  warn: (entry: Omit<LogEntry, 'level'>) => log({ ...entry, level: 'warn' }),
  error: (entry: Omit<LogEntry, 'level'>) => log({ ...entry, level: 'error' }),
}
