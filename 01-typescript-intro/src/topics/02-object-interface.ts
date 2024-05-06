
const skills: string[]=['bash','counter','healing',true,123];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string | undefined;

}
const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ['bash', 'counter'],
    
}
strider.hometown="Gondor";

console.table(strider);

export {}