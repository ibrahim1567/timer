const alarm = process.argv.slice(2);
for (const seconds of alarm) {
  if (seconds > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
}