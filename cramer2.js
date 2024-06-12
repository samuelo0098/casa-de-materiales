function solve() {
			const a1 = parseFloat(document.getElementById('a1').value);
			const b1 = parseFloat(document.getElementById('b1').value);
			const c1 = parseFloat(document.getElementById('c1').value);
			const a2 = parseFloat(document.getElementById('a2').value);
			const b2 = parseFloat(document.getElementById('b2').value);
			const c2 = parseFloat(document.getElementById('c2').value);

			const D = a1 * b2 - a2 * b1;
			const Dx = c1 * b2 - c2 * b1;
			const Dy = a1 * c2 - a2 * c1;

			if (D === 0) {
				document.getElementById('x-result').value = 'No hay solución única';
				document.getElementById('y-result').value = 'No hay solución única';
			} else {
				const x = Dx / D;
				const y = Dy / D;
				document.getElementById('x-result').value = x;
				document.getElementById('y-result').value = y;
			}
 		}