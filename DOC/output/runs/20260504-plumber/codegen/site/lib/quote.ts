export function estimateQuote(service: string): string {
  const ranges: Record<string, string> = {
    "Blocked Drains": "$220 - $480",
    "Hot Water Systems": "$250 - $900",
    "Leak Detection": "$180 - $520",
    "Emergency Plumbing": "$260 - $780",
  };

  return ranges[service] ?? "$200 - $600";
}
