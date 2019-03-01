import test from 'ava';

// test('describe your test', t => { });

test('basic assertions', t => {

    let num = 1;
    t.is(num, 1);
    t.not(num, 2);

    t.truthy(num); // pass
    t.true(num === 1); // pass

    t.falsy(null);
    t.falsy(undefined);
    t.falsy('');
    t.falsy(0);
    t.falsy(false);

    t.truthy('vinod');
    t.truthy(-1);
    t.truthy({ name: 'vinod' });
    t.truthy([]);

    // 'x' is undefined, and x.length is an error
    t.throws(() => { x.length }); // passes

});