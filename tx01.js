function getFp() {
  var a = getMol();
  a = molstat(a);
  document.getElementById("mol").value = a;
}
function getFp2() {
  var a = getMol();
  return molstat(a);
}
function searchMol() {
  var a = getFp2();
  switch(!0) {
    case "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" == a:
      break;
    default:
      win = window.open("http://toxlab.wincept.eu/index.php?cha=1&sort=mol_fp&fp=" + a, "toxlab");
  }
}
function searchMol2() {
  var a = document.getElementById("mol").value;
  a = molstat(a);
  switch(!0) {
    case "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" == a:
      break;
    default:
      win = window.open("http://toxlab.wincept.eu/index.php?cha=1&sort=mol_fp&fp=" + a, "_self");
  }
}
function searchMolRu() {
  var a = getFp2();
  switch(!0) {
    case "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" == a:
      break;
    default:
      win = window.open("http://toxlab.wincept.eu/index_ru.php?cha=1&sort=mol_fp&fp=" + a, "_self");
  }
}
function searchMol2Ru() {
  var a = document.getElementById("mol").value;
  a = molstat(a);
  switch(!0) {
    case "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" == a:
      break;
    default:
      win = window.open("http://toxlab.wincept.eu/index_ru.php?cha=1&sort=mol_fp&fp=" + a, "_self");
  }
}
function isBond(a, c, d) {
  for (var e = !1, h = d.length, b = 0; b < h; b++) {
    switch(!0) {
      case a == d[b][0] && c == d[b][2] || c == d[b][0] && a == d[b][2]:
        e = !0;
    }
  }
  return e;
}
function inArray_(a, c) {
  for (var d = !1, e = c.length, h = 0; h < e; h++) {
    a == c[h] && (d = !0, h = e);
  }
  return d;
}
function isEqual(a, c) {
  var d = !0, e = a.length, h = c.length;
  switch(!0) {
    case e != h:
      d = !1;
      break;
    default:
      for (h = 0; h < e; h++) {
        inArray(a[h], c) || (d = !1, h = e);
      }
  }
  return d;
}
function isUnique(a, c) {
  var d = !0, e = c.length;
  switch(!0) {
    case 0 < e:
      for (var h = 0; h < e; h++) {
        if (isEqual(a, c[h])) {
          d = !1;
          break;
        }
      }
  }
  return d;
}
function getBt(a, c, d) {
  var e = d.length, h = 0;
  for (i = 0; i < e; i++) {
    switch(!0) {
      case a == d[i][0] && c == d[i][2] || c == d[i][0] && a == d[i][2]:
        h = parseInt(d[i][4]);
    }
  }
  return h;
}
function isAromatic(a, c) {
  for (var d = !1, e = a.length, h = 0, b = 0; b < e; b++) {
    h += getBt(a[b], a[(b + 1) % e], c);
  }
  switch(!0) {
    case 6 == e && 9 == h:
      d = !0;
  }
  return d;
}
function packFingerprint(a) {
  for (var c = a.length, d = "", e, h, b = 0; b < c; b++) {
    e = a[b] % 26, h = Math.floor(a[b] / 26), d += String.fromCharCode(h + 65) + String.fromCharCode(e + 65);
  }
  return d;
}
function molstat(a) {
  var c = [], d = [], e = [], h = [], b = [];
  var t = a.split(/\r\n|\r|\n/g);
  var u = parseInt(t[3].substr(0, 3)), w = parseInt(t[3].substr(3, 3));
  imin = 4;
  imax = 4 + u;
  for (a = imin; a < imax; a++) {
    switch(v = t[a].trim().split(/\s+/), d.push([v[3]]), v[3]) {
      case "H":
        break;
      default:
        e.push([a - imin + 1, v[3], 0, 0]);
    }
  }
  na_heavy = e.length;
  imin = 4 + u;
  imax = 4 + u + w;
  for (a = imin; a < imax; a++) {
    switch(v = t[a].trim().split(/\s+/), h.push([v[0], v[1], v[2]]), !0) {
      case "H" == d[v[0] - 1] || "H" == d[v[1] - 1]:
        break;
      default:
        b.push([v[0], d[v[0] - 1], v[1], d[v[1] - 1], v[2]]);
    }
  }
  nb_heavy = b.length;
  imin = t = h = d = 0;
  imax = nb_heavy;
  for (a = imin; a < imax; a++) {
    switch(b[a][4]) {
      case "1":
      case "5":
      case "6":
      case "8":
        d++;
        break;
      case "2":
      case "4":
      case "7":
        h++;
        break;
      case "3":
        t++;
    }
  }
  var A = w = u = 0, B = 0, C = 0, D = 0, E = 0, x = 0;
  imin = 0;
  imax = na_heavy;
  for (a = imin; a < imax; a++) {
    switch(e[a][1]) {
      case "Li":
      case "Na":
      case "K":
      case "Rb":
      case "Cs":
      case "Fr":
        u++;
        break;
      case "Be":
      case "Mg":
      case "Ca":
      case "Sr":
      case "Ba":
      case "Ra":
        w++;
        break;
      case "B":
      case "Al":
      case "Ga":
      case "In":
      case "Tl":
        A++;
        break;
      case "C":
      case "Si":
      case "Ge":
      case "Sn":
      case "Pb":
        B++;
        break;
      case "N":
      case "P":
      case "As":
      case "Sb":
      case "Bi":
        C++;
        break;
      case "O":
      case "S":
      case "Se":
      case "Te":
      case "Po":
        D++;
        break;
      case "F":
      case "Cl":
      case "Br":
      case "I":
      case "At":
        E++;
        break;
      case "He":
      case "Ne":
      case "Ar":
      case "Kr":
      case "Xe":
      case "Rn":
        x++;
    }
  }
  var F = x = 0, G = 0, H = 0, I = 0;
  imin = 0;
  imax = na_heavy;
  for (a = imin; a < imax; a++) {
    switch(e[a][1]) {
      case "C":
        x++;
        break;
      case "N":
        F++;
        break;
      case "O":
        G++;
        break;
      case "F":
        H++;
        break;
      case "Cl":
        I++;
    }
  }
  var J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0;
  imin = 0;
  imax = na_heavy;
  var n = 0, p = nb_heavy;
  for (a = imin; a < imax; a++) {
    var y = e[a][0];
    for (j = n; j < p; j++) {
      switch(!0) {
        case b[j][0] == y || b[j][2] == y:
          e[a][2]++, e[a][3] += parseInt(b[j][4]);
      }
    }
  }
  imin = 0;
  imax = na_heavy;
  for (a = imin; a < imax; a++) {
    switch(e[a][1]) {
      case "C":
        switch(e[a][2]) {
          case 1:
            J++;
            break;
          case 2:
            K++;
            break;
          case 3:
            L++;
            break;
          case 4:
            M++;
        }break;
      case "N":
        switch(e[a][2]) {
          case 1:
            N++;
            break;
          case 2:
            O++;
            break;
          case 3:
            P++;
        }break;
      case "O":
        switch(e[a][2]) {
          case 1:
            Q++;
            break;
          case 2:
            R++;
        }
    }
  }
  imin = e = 0;
  imax = nb_heavy;
  var m = [];
  p = [];
  for (a = imin; a < imax - 1; a++) {
    for (j = imin + 1; j < imax; j++) {
      switch(!0) {
        case b[a][0] == b[j][0] && b[a][2] != b[j][2]:
          m.push([b[a][2], b[a][0], b[j][2]]);
          break;
        case b[a][2] == b[j][0] && b[a][0] != b[j][2]:
          m.push([b[a][0], b[a][2], b[j][2]]);
      }
    }
  }
  imin = 0;
  imax = m.length;
  for (a = imax - 1; a >= imin; a--) {
    switch(!0) {
      case isBond(m[a][0], m[a][2], b):
        if (n = isUnique(m[a], p)) {
          p.push(m[a]), m.splice(a, 1);
        }
    }
  }
  y = p.length;
  imin = 0;
  imax = nb_heavy;
  n = 0;
  p = m.length;
  var l = [];
  var q = [];
  for (a = imin; a < imax; a++) {
    for (j = n; j < p; j++) {
      switch(!0) {
        case b[a][0] == m[j][0] && b[a][2] != m[j][1] && b[a][2] != m[j][2]:
          l.push([b[a][2], b[a][0], m[j][1], m[j][2]]);
          break;
        case b[a][2] == m[j][0] && b[a][0] != m[j][1] && b[a][0] != m[j][2]:
          l.push([b[a][0], b[a][2], m[j][1], m[j][2]]);
      }
    }
  }
  imin = 0;
  imax = l.length;
  for (a = imax - 1; a >= imin; a--) {
    switch(!0) {
      case isBond(l[a][0], l[a][3], b):
        if (n = isUnique(l[a], q)) {
          q.push(l[a]), l.splice(a, 1);
        }
    }
  }
  m = q.length;
  imin = 0;
  imax = nb_heavy;
  n = 0;
  p = l.length;
  var k = [];
  q = [];
  for (a = imin; a < imax; a++) {
    for (j = n; j < p; j++) {
      switch(!0) {
        case b[a][0] == l[j][0] && b[a][2] != l[j][1] && b[a][2] != l[j][2] && b[a][2] != l[j][3]:
          k.push([b[a][2], b[a][0], l[j][1], l[j][2], l[j][3]]);
          break;
        case b[a][2] == l[j][0] && b[a][0] != l[j][1] && b[a][0] != l[j][2] && b[a][0] != l[j][3]:
          k.push([b[a][0], b[a][2], l[j][1], l[j][2], l[j][3]]);
      }
    }
  }
  imin = 0;
  imax = k.length;
  for (a = imax - 1; a >= imin; a--) {
    switch(!0) {
      case isBond(k[a][0], k[a][4], b):
        if (n = isUnique(k[a], q)) {
          q.push(k[a]), k.splice(a, 1);
        }
    }
  }
  l = q.length;
  imin = 0;
  imax = nb_heavy;
  n = 0;
  p = k.length;
  var g = [];
  q = [];
  for (a = imin; a < imax; a++) {
    for (j = n; j < p; j++) {
      switch(!0) {
        case b[a][0] == k[j][0] && b[a][2] != k[j][1] && b[a][2] != k[j][2] && b[a][2] != k[j][3] && b[a][2] != k[j][4]:
          g.push([b[a][2], b[a][0], k[j][1], k[j][2], k[j][3], k[j][4]]);
          break;
        case b[a][2] == k[j][0] && b[a][0] != k[j][1] && b[a][0] != k[j][2] && b[a][0] != k[j][3] && b[a][0] != k[j][4]:
          g.push([b[a][0], b[a][2], k[j][1], k[j][2], k[j][3], k[j][4]]);
      }
    }
  }
  imin = 0;
  imax = g.length;
  for (a = imax - 1; a >= imin; a--) {
    switch(!0) {
      case isBond(g[a][0], g[a][5], b):
        if (n = isUnique(g[a], q)) {
          q.push(g[a]), g.splice(a, 1);
        }
    }
  }
  k = q.length;
  imin = 0;
  imax = nb_heavy;
  n = 0;
  p = g.length;
  var f = [], r = [];
  for (a = imin; a < imax; a++) {
    for (j = n; j < p; j++) {
      switch(!0) {
        case b[a][0] == g[j][0] && b[a][2] != g[j][1] && b[a][2] != g[j][2] && b[a][2] != g[j][3] && b[a][2] != g[j][4] && b[a][2] != g[j][5]:
          f.push([b[a][2], b[a][0], g[j][1], g[j][2], g[j][3], g[j][4], g[j][5]]);
          break;
        case b[a][2] == g[j][0] && b[a][0] != g[j][1] && b[a][0] != g[j][2] && b[a][0] != g[j][3] && b[a][0] != g[j][4] && b[a][0] != g[j][5]:
          f.push([b[a][0], b[a][2], g[j][1], g[j][2], g[j][3], g[j][4], g[j][5]]);
      }
    }
  }
  imin = 0;
  imax = f.length;
  for (a = imax - 1; a >= imin; a--) {
    switch(!0) {
      case isBond(f[a][0], f[a][6], b):
        if (n = isUnique(f[a], r)) {
          r.push(f[a]), f.splice(a, 1);
        }
    }
  }
  g = r.length;
  imin = 0;
  imax = nb_heavy;
  n = 0;
  p = f.length;
  r = [];
  var z = [];
  for (a = imin; a < imax; a++) {
    for (j = n; j < p; j++) {
      switch(!0) {
        case b[a][0] == f[j][0] && b[a][2] != f[j][1] && b[a][2] != f[j][2] && b[a][2] != f[j][3] && b[a][2] != f[j][4] && b[a][2] != f[j][5] && b[a][2] != f[j][6]:
          r.push([b[a][2], b[a][0], f[j][1], f[j][2], f[j][3], f[j][4], f[j][5], f[j][6]]);
          break;
        case b[a][2] == f[j][0] && b[a][0] != f[j][1] && b[a][0] != f[j][2] && b[a][0] != f[j][3] && b[a][0] != f[j][4] && b[a][0] != f[j][5] && b[a][0] != f[j][6]:
          r.push([b[a][0], b[a][2], f[j][1], f[j][2], f[j][3], f[j][4], f[j][5], f[j][6]]);
      }
    }
  }
  imin = 0;
  imax = r.length;
  for (a = imax - 1; a >= imin; a--) {
    switch(!0) {
      case isBond(r[a][0], r[a][7], b):
        if (n = isUnique(r[a], z)) {
          z.push(r[a]), r.splice(a, 1);
        }
    }
  }
  n = z.length;
  imax = q.length;
  if (0 < imax) {
    for (a = 0; a < imax; a++) {
      switch(!0) {
        case isAromatic(q[a], b):
          e++;
      }
    }
  }
  c[0] = na_heavy;
  c[1] = nb_heavy;
  c[2] = d;
  c[3] = h;
  c[4] = t;
  c[5] = J;
  c[6] = K;
  c[7] = L;
  c[8] = M;
  c[9] = N;
  c[10] = O;
  c[11] = P;
  c[12] = Q;
  c[13] = R;
  c[14] = u;
  c[15] = w;
  c[16] = A;
  c[17] = B;
  c[18] = C;
  c[19] = D;
  c[20] = E;
  c[21] = x;
  c[22] = F;
  c[23] = G;
  c[24] = H;
  c[25] = I;
  c[26] = y;
  c[27] = m;
  c[28] = l;
  c[29] = k;
  c[30] = g;
  c[31] = n;
  c[32] = e;
  return packFingerprint(c);
}
;