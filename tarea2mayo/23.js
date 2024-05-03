for (let i = 0; i <= 100; i++) {
    process.stdout.write(`${i}\t`);
    if ((i + 1) % 10 === 0) {
        process.stdout.write('\n');
    }
}
