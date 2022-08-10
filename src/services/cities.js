
export function getData(city) {
    const cities = ['A Coruña','Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila',
        'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz',
        'Cantabria', 'Castellón', 'Ceuta', 'Ciudad Real',
        'Córdoba', 'Cuenca', 'Formentera', 'Girona', 'Granada',
        'Guadalajara', 'Guipuzcoa', 'Huelva', 'Huesca', 'Ibiza',
        'Jaén', 'Logroño', 'Las Palmas', 
        'Fuerteventura', 'Lanzarote', 'León', 'Lérida', 'Lugo', 'Madrid',
        'Málaga', 'Mallorca', 'Menorca', 'Murcia', 'Pamplona', 'Orense',
        'Palencia', 'Pontevedra', 'Salamanca', 'Tenerife',
        'La Gomera', 'La Palma', 'El Hierro', 'Segovia',
        'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia',
        'Valladolid', 'Bilbao', 'Zamora', 'Zaragoza' ];
    switch(city){
        case city === 'A Coruña':
            return [43.37, -8.39];  //lat, long
        case city === 'Alava':
            return [43.36, -6.20];
        case city === 'Albacete':
            return [38.99, -1.85];
        case city === 'Alicante':
            return [38.34, -0.48];
        case city === 'Almería':
            return [36.83, -2.45];
        case city === 'Asturias':
            return [43.49, -6.15];
        case city === 'Ávila':
            return [40.65, -4.69]; 
        case city === 'Badajoz':
            return [38.87, -6.97];
        case city === 'Barcelona':
            return [41.38, 2.15];
        case city === 'Burgos':
            return [42.34, -3.70];
        case city === 'Cáceres':
            return [39.47, -6.37];
        case city === 'Cádiz':
            return [36.52, -6.28];
        case city === 'Cantabria':
            return [43.49, -3.61];
        case city === 'Castellón':
            return [39.98, -0.04];
        case city === 'Ceuta':
            return [35.88, -5.32];
        case city === 'Ciudad Real':
            return [38.98, -3.92];
        case city === 'Córdoba':
            return [37.89, -4.77];
        case city === 'Cuenca':
            return [40.07, -2.13];
        case city === 'Formentera':
            return [38.68, 1.46];
        case city === 'Girona':
            return [41.98, 2.82];
        case city === 'Granada':
            return [37.18, -3.60];
        case city === 'Guadalajara':
            return [40.62, -3.16];
        case city === 'Guipuzcoa':
            return [43.01, -2.40];
        case city === 'Huelva':
            return [37.26, -6.94];
        case city === 'Huesca':
            return [42.13, -0.40];
        case city === 'Ibiza':
            return [38.97, 1.41];
        case city === 'Jaén':
            return [37.76, -3.79];
        case city === 'Logroño':
            return [42.46, -2.44];
        case city === 'Las Palmas':
            return [28.12, -15.44];
        case city === 'Fuerteventura':
            return [28.35, -14.05];
        case city === 'Lanzarote':
            return [29.03, -13.63];
        case city === 'León':
            return [42.59, -5.57];
        case city === 'Lérida':
            return [41.61, 0.62];
        case city === 'Lugo':
            return [42.87, -7.63];
        case city === 'Madrid':
            return [40.41, -3.70];
        case city === 'Málaga':
            return [36.72, -4.42];
        case city === 'Mallorca':
            return [39.56, 2.65];
        case city === 'Menorca':
            return [39.99, 3.83];
        case city === 'Murcia':
            return [37.98, -1.13];
        case city === 'Pamplona':
            return [42.81, -1.64];
        case city === 'Orense':
            return [42.33, -7.86];
        case city === 'Palencia':
            return [43.49, -3.61];
        case city === 'Pontevedra':
            return [42.00, -4.52];
        case city === 'Salamanca':
            return [40.96, -5.66];
        case city === 'Tenerife':
            return [28.46, -16.25];
        case city === 'La Gomera':
            return [28.09, -17.11];
        case city === 'La Palma':
            return [28.68, -17.76];
        case city === 'El Hierro':
            return [27.74, -18.03];
        case city === 'Segovia':
            return [40.94, -4.11];
        case city === 'Sevilla':
            return [37.38, -5.97];
        case city === 'Soria':
            return [41.56, -2.40];
        case city === 'Tarragona':
            return [41.11, 1.25];
        case city === 'Teruel':
            return [40.34, -1.10];
        case city === 'Toledo':
            return [39.85, -4.02];
        case city === 'Valencia':
            return [39.46, -0.37];
        case city === 'Valladolid':
            return [41.65, -4.72];
        case city === 'Bilbao':
            return [43.25, -2.91];
        case city === 'Zamora':
            return [41.50, -5.74];
        case city === 'Zaragoza':
            return [41.65, -0.87];
        default:
            return city;
    }
}

