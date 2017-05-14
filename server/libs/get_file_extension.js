import { extension } from 'mime-types';

export default file => extension(file.type);
