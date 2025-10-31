const crypto = require('node:crypto')

// Libuv has 4 threads but can be increased
// if i increased this number beyond the cpu cores my pc has, the average time taken per method executino also increases
// increasing this number can help with performace but it is limited to the number of cores my cpu has.
process.env.UV_THREADPOOL_SIZE = 5

// every method in nodejs that has the "sync" suffix always runs on the main thread and is blocking

crypto.pbkdf2() //password based key derivation function


//synchronos every time i run the method it take Xn times, because it is done single threaded
const start = new Date.now()
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
console.log("hash: ", Date.now() - start)


const MAX_CALLS = 3
const startTwo = new Date.now()

// this is running on a separate thead in libuv's thread pool. they do run synchronously in their own thread but as far as the main thread is concerned it appears as if the method is running asynchronously
for(let i = 0; i < MAX_CALLS; i++){
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`hash: ${i + 1} - ${Date.now() - startTwo}`)
    })
}


/*
In node, async methods are handled but libuv

they are handled ub twi dufferebt ways
1. native async mechanism
2. thread pool

whenever possible, libuv will use native async mechanisms in the os so as to avoid blocking the main thread

since since this is part of the kernel, there is different mechanism for each os. we have epoll for linux, kqueue for macos, and io completion por on windows

relying on native async mechanisms makes node scalable as the only limitation is the operating system kernel

example of this type is a network io operation

on the other hand if there is no native async support and the task is file i/o or cpu intensive,
libuv uses the thread pool to avoid blocking the main thread.

although the thread pool preserves asynchonicity with repect to node's main thread, it can still become a bottleneck if all threads are bussy.



*/