export interface Service {
  icon: string;
  title: string;
  desc: string;
  num: string;
  dark?: boolean;
}

export const servicesConfig: Service[] = [
  { icon: 'speaker', title: 'ENSAIO', desc: 'Sala tratada acusticamente com backline profissional.', num: '01' },
  { icon: 'mic', title: 'GRAVAÇÃO', desc: 'A alta fidelidade que o seu projeto demanda.', num: '02', dark: true },
  { icon: 'instant_mix', title: 'MIXAGEM', desc: 'Equilibrando e aprimorando faixas para som comercial.', num: '03' },
  { icon: 'album', title: 'MASTERIZAÇÃO', desc: 'O polimento final para garantir que sua música soe bem.', num: '04' }
];
