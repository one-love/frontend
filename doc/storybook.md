Storybook
=========
To run storybook, you need setup described in [Quick Start](https://github.com/one-love/one-love/blob/master/doc/quick-start.md).
Launching the stories is done with:
```
$ docom run -p 9001:9001 --rm frontend bin/storybook.sh
```
After this, you're ready to see the [stories](http://localhost:9001)

### Atomic Design
One Love frontend follows [Atomic Design](https://github.com/bradfrost/atomic-design) principles. For now, One Love frontend is 
simple, so we don't implement everything described in the mentioned book, but the structure may grow in the future. In short, we 
have:
* `atoms` which are the simplest elements, like `button` or `input`
* `molecules` which contain atoms and some other elements, like `div` as container
* `layouts` which contain molecules

### Stories
All stories are in the [stories](../stories/) directory. Inside `components` you'll find directories which follow described 
atomic design structure. Storybook itself reads config from [.storybook](../.storybook/).
