export default{
    port: 1337,
    dbUri: "mongodb+srv://Cuk22:Gandor33@cuk22.7xpv2cc.mongodb.net/?retryWrites=true&w=majority",
    saltWorkFactor: 10,
    accessTokenTtl: "15m", // Ttl = time to live
    refreshTokenTtl: "1y", // without accessToken user would need to log in every 15m
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBuztgeOu1/mD7VGaVVwb2V
    SNrCqsj533PTq3a3SdIJ1UGnWkwww7KPylr1vI5Aylv+QKmrSbcRRFniHNCqEtef
    2imkr6V30MZZp987LoMjEzC1lvB515Y4yG7PwqYRWrvHZ2vOxAeBM/e5XiBqaqZE
    eMsjITCE3tJYURzMuD2qyl3tNBdmcdrVWq17p/k0IZ1X2yx0BuYEGtrASRNzrpMU
    QO4Ub7nG6M63LgABwYtGzOFOoXqjEHQjrHiNXN12CYBuxQCFiqOjMu2yro7IKmCH
    56xvEmByuHnqbwwDeLs/GDVUo9j81CArZrAv+XCbPqHAQq3a+nb76004aRtb3dOD
    AgMBAAE=
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIIEogIBAAKCAQBuztgeOu1/mD7VGaVVwb2VSNrCqsj533PTq3a3SdIJ1UGnWkww
    w7KPylr1vI5Aylv+QKmrSbcRRFniHNCqEtef2imkr6V30MZZp987LoMjEzC1lvB5
    15Y4yG7PwqYRWrvHZ2vOxAeBM/e5XiBqaqZEeMsjITCE3tJYURzMuD2qyl3tNBdm
    cdrVWq17p/k0IZ1X2yx0BuYEGtrASRNzrpMUQO4Ub7nG6M63LgABwYtGzOFOoXqj
    EHQjrHiNXN12CYBuxQCFiqOjMu2yro7IKmCH56xvEmByuHnqbwwDeLs/GDVUo9j8
    1CArZrAv+XCbPqHAQq3a+nb76004aRtb3dODAgMBAAECggEAYRXwO4RsBKiTHMls
    mFe40OzVZ0yV7IDBDkukJ3GRizYDYSr3qJ4+fEfTLI25ocDrmzhysHZU5NcbXcbb
    eLgrno5agEW5V+Jfd7xjFYpqMbglrGUEa+zdXQEYPgaQ1JHIBy1xQud0n9q1iP+U
    rUimR0YCzdPNnA1TBTiEYEZpGZMvmdthM2/QwGU8aeK/G/INywxG4kpoORgtcmJQ
    LcTCbp9tmmcQjMicooJY0CyplKjLfO+gsEMbwBv/VXsyX10m1mYFl57CkG5WwIs7
    sfS8jwcEye8EihpwUUkLFkLllWezxSfYCX7BZnJ1phAklgL1z9ydwWw6/9sJvXCT
    pssxAQKBgQC0xhzREsuR7qHNy3QWaU2aURXb9vnv6WVV3rxccdmsdHkFtsxNwrqg
    zG4c2QEY0zzZnHydGUTON18M/LBZvvraLsgcAsNvYXhF3rygfk7rPJgJalVysKYN
    1u7f5SNZIXZa3deey7k5XMnMuR1QF0DzKqtsCOBQ7paVClQquLakAwKBgQCc6z9L
    7oEI61UEhIvaRhu70EbS55JMQRfd4lAnwLI4B+6NHA7qjEl+VdMZ5ntBX35/1t3S
    9Y7WPbrcS6lYZnLm/IjP2knc2LNw9KfYn/HxjEwRBvoYMQ+5GDK3dhYYDHZJPXPP
    OOq9MmYtBPpehVtx+8TJdtvQtf9E33VRsDm6gQKBgQCddowXWaXU4eYzGmtuMh+U
    sdi2l7UyUz0fxTqR0+HlpDbe0VG40kw6UJgBrMyV0TqJ2xN4zE/wyK6U427BXeeo
    MWPBcm7GEELxqYjoy9z2bvuICAWSN2kNWREOGcvmkY1ErURqX85htv9Ywk5UO00q
    Axr6qeiq1oh4Hl0eMXN1/QKBgASMAIKHv69tekIuQQsrGuSfTV4RHbkd7b4dL6tn
    NwLOoAfwtzHurLZ/cCWA+zNSvAyiQj05plDo6wA1JQwNs+ijiqdTMO64TMLKJA7v
    24ffQ9j+dcK7sTPw0o9kWZGK0uaeZDut74dZ7YICcerJPHQaEoKv8gCjNWlefDzI
    uXOBAoGABQcQ54xeBY4xsWwyXOpjLTrzO+6ep25e+HfE8ogQ1UKAUAaYWEX6wdzy
    8Pinyp6UtPmEmNBfyowSnQBt6jG2Ie3yjEKt2qn4BtD7samWVq3tfdvkITT/TZQu
    s9Y/lbDnOaKYvmVlD48kOe3YHbru+uyMjKIMfgeT6WzuSD2Wc/E=
    -----END RSA PRIVATE KEY-----`
};