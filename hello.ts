const i: string = 'fds';
interface Baby {
    name: string,
    age: number,
    desc?: string,
}

const baby: Baby = {
    name: 'cheng',
    age: 5,
};

function log(b: Baby): string {
    return b.name;
}

function getNameOrAge(sth: string | number): number {
    if ((sth as string).length) return (sth as string).length;
    else return (sth as number);
}

enum Days { Sum, Mon, Tue }

interface say {
    say(),
}

class Animal implements say {
    public name = 'qiu';
    public constructor(name: string) {
        this.name = name;
    }
    public say(): void {
        console.log(this.name);
    }
}


