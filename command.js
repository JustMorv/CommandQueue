class CommandQueue {
	constructor(){
		this.commands = []
		this.run = false
	}

	addCommand(command) {
	    this.commands.push(command);
	    if (!this.run) {
	      this.run = true;
	      this.runCommands();
	    }
	  }

	  runCommands() {
	    if (this.commands.length > 0) {
	      const command = this.commands.shift();
	      command.execute();
	      setTimeout(() => {
	        this.runCommands();
	      }, command.delay);
	    } else {
	      this.run = false;
	    }
	  }
}


class Command {
	constructor(fn, delay){
		this.fn = fn;
		this.delay = delay
	}

	execute(){
		this.fn();
	}
}

// создаём наследника и добавляем очередь
const queue = new CommandQueue()

queue.addCommand(new Command(() => console.log('command is 1 finish'), 1000));
queue.addCommand(new Command(() => console.log('command is 2 finish'), 1000));
queue.addCommand(new Command(() => console.log('command is 3 finish'), 1000));