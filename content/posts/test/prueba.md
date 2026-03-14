+++
date = '2026-03-13T19:11:37-06:00'
draft = false
tags = ["test", "blog"]
categories = ["notes"]
title = 'Test'
+++

# Introduccion
This post verifies that the blog environment works correctly:

## Features tested

- Markdown rendering
- syntax highlighting
- terminal blocks
- assembly formatting
- hexdumps
- images

---

# Bash Example

```bash
file sample.bin
sha256sum sample.bin
strings sample.bin | head

```

___

# C Example

```c
#include <stdio.h>

int main() {
    printf("hello world\n");
    return 0;
}

```
---
# Assembly Example

```asm
push rbp
mov rbp, rsp
sub rsp, 0x20
mov eax, 0
call printf
leave
ret
```
___
# hexdump Example
### codigo
___

```hex
0x00ffee
```
___

# imagenes

![alt](/images/term.png)
___

### citas
```
> texto citado
```
___

### tablas 

| name | value |
| -------------- | --------------- |
| eax | 0x0fff |
___
